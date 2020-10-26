import { NodeMetadata, NodeOptions, NodeStats, NodeStatus } from "./i.ts";
import WebSocket from "ws";
import { ManagerEvent } from "../../constants.ts";

import type { Player } from "../player/Player.ts";
import type { Manager } from "../Manager.ts";

export class Node {
	/**
	 * The identifier for this node.
	 */
	public readonly id: string | number;

	/**
	 * Whether to use wss/https
	 */
	public readonly secure: boolean;

	/**
	 * The configured port of the andesite instance.
	 */
	public readonly port?: number;

	/**
	 * The total number of tries this node can use to reconnect.
	 */
	public totalReconnectTries: number;

	/**
	 * The metadata of the andesite-instance.
	 */
	public meta?: NodeMetadata;

	/**
	 * The stats of the andesite-instance.
	 */
	public stats?: NodeStats;

	/**
	 * The number of tries used to reconnect.
	 * @private
	 */
	#reconnectTries: number;

	/**
	 * The resume id for this node.
	 * @private
	 */
	#resumeId?: number

	/**
	 * The websocket instance.
	 */
	#ws!: WebSocket;

	/**
	 * The current status of this node.
	 * @private
	 */
	#status: NodeStatus

	/**
	 * The status promise.
	 * @private
	 */
	#statsPromise?: (stats: NodeStats) => void;

	/**
	 * Queue for outgoing messages.
	 */
	readonly #queue: Payload[];

	/**
	 * The host of the andesite instance.
	 * @private
	 */
	readonly #host: string;

	/**
	 * The password for the andesite instance.
	 * @private
	 */
	readonly #password?: string;

	/**
	 * The active players for this node.
	 * @private
	 */
	readonly #players: Map<string, Player>

	/**
	 * The manager instance.
	 * @private
	 */
	readonly #manager: Manager

	/**
	 * @param manager The manager instance.
	 * @param options The options for this node.
	 */
	public constructor(manager: Manager, options: Required<NodeOptions>) {
		this.#manager = manager
		this.#players = new Map();
		this.#status = NodeStatus.DISCONNECTED;
		this.#queue = [];
		this.#reconnectTries = 0;

		this.id = options.id;
		this.port = +options.port;
		this.secure = options.secure ?? false;
		this.totalReconnectTries = options.reconnectTries ?? 5;

		this.#password = options.password;
		this.#host = options.host
	}

	/**
	 * The active players for this node.
	 */
	public getPlayers(): Map<string, Player> {
		return this.#players;
	}

	/**
	 * The current status of this node.
	 */
	public getStatus(): NodeStatus {
		return this.#status;
	}

	/**
	 * The manager instance.
	 */
	public getManager(): Manager {
		return this.#manager;
	}

	/**
	 * Whether this node can reconnect.
	 */
	public canReconnect(): boolean {
		return this.#reconnectTries < this.totalReconnectTries;
	}

	/**
	 * Get the current stats of the andesite instance.
	 */
	public async getStats(): Promise<NodeStats> {
		return new Promise((res, rej) => {
			if (!this.isConnected()) {
				rej("This node is not connected.");
				return;
			}

			this.#statsPromise = res;
			this.sendWs({ op: "get-stats" });
		});
	}

	/**
	 * Whether the websocket is open / connected.
	 */
	public isConnected(): boolean {
		return this.#ws && this.#ws.readyState === WebSocket.OPEN;
	}

	/**
	 * Penalties of this node. The higher the return number, the larger load the andesite instance is handling.
	 */
	public getPenaltyCount(): number {
		if (!this.stats) {
			return 0
		}

		let penalties = 0;
		penalties += this.stats.players.playing;
		penalties += Math.round(Math.pow(1.05, 100 * this.stats.cpu.system) * 10 - 10);
		if (this.stats.frameStats) {
			penalties += this.stats.frameStats.reduce((a, fs) => a + fs.loss, 0);
		}

		return penalties;
	}

	/**
	 * Send a packet to the andesite instance.
	 * @param data The packet data
	 * @param prioritize Whether to prioritize this packet.
	 */
	public sendWs(data: { op: string } & Record<string, any>, prioritize = false) {
		return new Promise((resolve, reject) => {
			const packet = JSON.stringify(data);
			if (prioritize) {
				this.#queue.unshift({ packet, resolve, reject });
			} else {
				this.#queue.push({ packet, resolve, reject });
			}

			if (this.isConnected()) {
				this.processQueue().then();
			}
		});
	}

	/**
	 * Configure the event buffer for this session.
	 * @param timeout Timeout for event buffering, in milliseconds
	 */
	public async configureEventBuffer(timeout: number): Promise<number> {
		await this.sendWs({
			op: "event-buffer",
			timeout
		});

		return timeout;
	}

	/**
	 * Connect this node to the andesite instance.
	 */
	public connect(): void {
		if (this.#status !== NodeStatus.RECONNECTING) {
			this.#status = NodeStatus.CONNECTING;
		}

		if (this.isConnected()) {
			this.cleanUp()
			this.#ws?.close(1012);
			this.#ws = undefined
		}

		const headers: Record<string, any> = {}
		if (this.#resumeId) {
			headers["Andesite-Resume-Id"] = this.#resumeId
		}

		if (this.#password) {
			headers.authorization = this.#password
		}

		this.#ws = new WebSocket(this.getWsAddress(), { headers });
		this.#ws.onopen = this.handleOpen.bind(this);
		this.#ws.onclose = this.handleClose.bind(this);
		this.#ws.onerror = this.handleError.bind(this);
		this.#ws.onmessage = this.handleMessage.bind(this);
	}

	public reconnect(): void {

	}

	/**
	 * Processes all of the queued payloads.
	 * @private
	 */
	protected async processQueue(): Promise<void> {
		if (this.#queue.length === 0) return;

		while (this.#queue.length > 0) {
			const payload = this.#queue.shift();
			if (!payload) return;
			await this.send(payload);
		}
	}

	/**
	 * Get the websocket address of the andesite instance.
	 * @protected
	 */
	protected getWsAddress(): string {
		return `ws${this.secure ? "s" : ""}://${this.#host}${this.port ? `:${this.port}` : ""}`;
	}

	/**
	 * Cleans up the websocket listeners.
	 * @since 1.0.0
	 * @private
	 */
	protected cleanUp(): void {
		delete this.#ws?.onclose;
		delete this.#ws?.onopen;
		delete this.#ws?.onmessage;
		delete this.#ws?.onerror;
	}

	/**
	 * Handles the "open" websocket event.
	 * @private
	 */
	private async handleOpen() {
		this.#manager.emit(ManagerEvent.NODE_READY, this)

		await this.processQueue()
			.catch((e) => this.#manager.emit(ManagerEvent.NODE_ERROR, e, this));

		this.#status = NodeStatus.CONNECTED
	}

	/**
	 * Handles the "message" websocket event.
	 * @param data The message data.
	 *
	 * @private
	 */
	private async handleMessage({ data }: WebSocket.MessageEvent) {
		if (data instanceof ArrayBuffer) data = Buffer.from(data);
		else if (Array.isArray(data)) data = Buffer.concat(data);

		let pk: any;
		try {
			pk = JSON.parse(data.toString());
		} catch (e) {
			this.#manager.emit(ManagerEvent.NODE_ERROR, e, this);
			return;
		}

		switch (pk.op) {
			case "connection-id":
				this.#resumeId = pk.id;
				break;
			case "metadata":
				this.meta = pk.data;
				break;
			case "stats":
				if (this.#statsPromise) {
					this.#statsPromise(pk.stats);
					this.#statsPromise = undefined;
				}

				this.stats = pk.stats;
				break;
			case "event":
			case "player-update":
				break;
		}

		this.#manager.emit(ManagerEvent.NODE_PACKET, pk, this)
	}

	/**
	 * Handles the "close" websocket event.
	 * @param event The event data.
	 *
	 * @private
	 */
	private async handleClose(event: WebSocket.CloseEvent) {
		if (this.#reconnectTries === this.totalReconnectTries) {
			this.#manager.emit(ManagerEvent.NODE_DISCONNECT, event, this);
		}

		if (event.code !== 1000 && event.reason !== "destroy") {
			this.reconnect();
		}
	}

	/**
	 * Handles the "error" websocket event.
	 * @param event The event data.
	 *
	 * @private
	 */
	private async handleError(event: WebSocket.ErrorEvent) {
		const error = event.error ? event.error : event.message;
		this.#manager.emit(ManagerEvent.NODE_ERROR, error, this);
	}

	/**
	 * Sends a packet to the andesite instance.
	 * @private
	 */
	private async send(payload: Payload): Promise<void> {
		return this.#ws?.send(payload.packet, (err: Error) => {
			if (err) payload.reject(err);
			else payload.resolve();
		});
	}
}

export interface Payload {
	resolve: (...args: any[]) => unknown;
	reject: (...args: unknown[]) => unknown;
	packet: unknown;
}

