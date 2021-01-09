import WebSocket from "ws";

import { Player } from "../player/Player";
import { REST } from "./REST";
import { ManagerEvent, PlayerManager } from "../PlayerManager";

import type { NodeMetadata, NodeOptions, NodeStats, PlayerTransport, ReconnectionOptions, Dictionary } from "../types";

export enum NodeStatus {
  /**
   * The websocket is currently connected to the node.
   */
  CONNECTED,

  /**
   * The websocket is connecting to the node.
   */
  CONNECTING,

  /**
   * The websocket is currently disconnected from the node.
   */
  DISCONNECTED,

  /**
   * The websocket is currently trying to reconnect.
   */
  RECONNECTING
}

export class Node {
  /**
   * The identifier for this node.
   */
  readonly id: string | number;

  /**
   * Whether to use wss/https
   */
  readonly secure: boolean;

  /**
   * The configured port of the andesite instance.
   */
  readonly port?: number;

  /**
   * The reconnection options for this node.
   */
  readonly reconnection: Required<ReconnectionOptions>;

  /**
   * The current reconnection try this node is on, or 0 if this player hasn't closed.
   */
  currentReconnect: number = 0;

  /**
   * The resume id for this node.
   */
  connectionId?: number;

  /**
   * When a connection is closed, events will be buffered for up to the timeout specified here.
   */
  eventBuffer?: number;

  /**
   * The metadata of the andesite-instance.
   */
  meta?: NodeMetadata;

  /**
   * The stats of the andesite-instance.
   */
  stats?: NodeStats;

  /**
   * The timeout for reconnecting.
   * @private
   */
  #reconnectTimeout: NodeJS.Timeout | null = null;

  /**
   * The websocket instance.
   */
  #ws?: WebSocket;

  /**
   * The current status of this node.
   * @private
   */
  #status: NodeStatus;

  /**
   * The rest manager.
   * @private
   */
  #rest: REST | null = null;

  /**
   * Queue for outgoing messages.
   * @private
   */
  readonly #queue: unknown[];

  /**
   * The host of the andesite instance.
   * @private
   */
  readonly #host: string;

  /**
   * The password for the andesite instance.
   * @private
   */
  readonly #auth?: string;

  /**
   * The active players for this node.
   * @private
   */
  readonly #players: Map<string, Player>;

  /**
   * The manager instance.
   * @private
   */
  readonly #manager: PlayerManager;

  /**
   * @param manager The manager instance.
   * @param options The options for this node.
   */
  constructor(manager: PlayerManager, options: Required<NodeOptions>) {
    this.id = options.id;
    this.port = +options.port;
    this.secure = options.secure ?? false;
    this.reconnection = Object.assign(options.reconnection ?? {}, manager.reconnectionDefaults);
    this.eventBuffer = options.eventBuffer ?? manager.eventBuffer;

    this.#manager = manager;
    this.#players = new Map();
    this.#status = NodeStatus.DISCONNECTED;
    this.#queue = [];
    this.#auth = options.auth;
    this.#host = options.host;
  }

  /**
   * The rest manager for this node.
   */
  get rest(): REST {
    if (!this.#rest) {
      this.#rest = new REST(this);
    }

    return this.#rest;
  }

  /**
   * The active players for this node.
   */
  get players(): Map<string, Player> {
    return this.#players;
  }

  /**
   * The host of this andesite instance.
   */
  get host(): string {
    return this.#host;
  }

  /**
   * The authorization for this andesite instance.
   */
  get auth(): string | undefined {
    return this.#auth;
  }

  /**
   * The current status of this node.
   */
  get status(): NodeStatus {
    return this.#status;
  }

  /**
   * The manager instance.
   */
  get manager(): PlayerManager {
    return this.#manager;
  }


  /**
   * Penalties of this node. The higher the return number, the larger load the andesite instance is handling.
   */
  get penalties(): number {
    if (!this.stats) {
      return 0;
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
   * Whether the websocket is open / connected.
   */
  get connected(): boolean {
    return !!this.#ws && this.#ws?.readyState === WebSocket.OPEN;
  }

  /**
   * Creates a new player with the provided guildId and transport.
   *
   * @param guildId The guild id.
   * @param transport The transport to use.
   */
  createPlayer(guildId: string, transport: PlayerTransport = "websocket"): Player {
    let player = this.players.get(guildId);
    if (player) {
      return player;
    }

    this.debug(`creating player for ${guildId} with transport: ${transport}`);
    player = Player.create(transport, this, guildId);
    this.players.set(guildId, player);

    return player;
  }

  /**
   * Destroys a player that is assigned the provided guild id.
   *
   * @param guildId Guild ID of the player to destroy.
   */
  async destroyPlayer(guildId: string): Promise<boolean> {
    const player = this.players.get(guildId);
    if (!player) {
      return false;
    }

    await player.disconnect().destroy();
    return this.players.delete(guildId);
  }

  /**
   * Send a packet to the andesite instance.
   * @param data The packet data
   * @param prioritize Whether to prioritize this packet.
   */
  async sendWs(data: { op: string } & Dictionary, prioritize = false) {
    this.debug(`queueing \"${data.op}\" operation, it is${prioritize ? "" : " not"} prioritized`);
    this.#queue[prioritize ? "unshift" : "push"](JSON.stringify(data));
    await this.processQueue();
  }

  /**
   * Configure the event buffer for this session.
   * @param timeout Timeout for event buffering, in milliseconds
   */
  async configureEventBuffer(timeout: number): Promise<number> {
    await this.sendWs({
      op: "event-buffer",
      timeout,
    }, true);

    return timeout;
  }

  /**
   * Closes the websocket connection.
   * @returns {Promise<void>}
   */
  async close(reason = "destroy") {
    if (this.#ws && this.connected) {
      await this.processQueue();
      this.#ws.onclose = () => this.#manager.emit(ManagerEvent.NODE_DISCONNECT, { reason }, this);
      this.#ws?.close(1000, reason);
    }

    this.#ws = undefined;
  }

  /**
   * Connect this node to the andesite instance.
   */
  async connect(userId: string): Promise<this> {
    if (this.#status !== NodeStatus.RECONNECTING) {
      this.#status = NodeStatus.CONNECTING;
    }

    if (this.connected) {
      this.cleanUp();
      await this.close("reconnecting");
    }

    const headers: Record<string, any> = {
      "User-Id": userId,
    };

    if (this.connectionId) {
      headers["Andesite-Resume-Id"] = this.connectionId;
    }

    if (this.#auth) {
      headers.authorization = this.#auth;
    }

    this.#ws = new WebSocket(`ws${this.secure ? "s" : ""}://${this.#host}${this.port ? `:${this.port}` : ""}/websocket`, {
      headers,
    });

    this.#ws.onopen = this.handleOpen.bind(this);
    this.#ws.onclose = this.handleClose.bind(this);
    this.#ws.onerror = this.handleError.bind(this);
    this.#ws.onmessage = this.handleMessage.bind(this);

    return this;
  }

  /**
   * Reconnects to the andesite instance.
   */
  async reconnect(): Promise<void> {
    if (this.#reconnectTimeout) {
      clearTimeout(this.#reconnectTimeout);
      this.#reconnectTimeout = null;
    }

    switch (this.currentReconnect) {
      case this.reconnection.tries:
        this.#status = NodeStatus.DISCONNECTED;
        this.manager.emit(ManagerEvent.NODE_DISCONNECT, { reason: `Ran out of reconnection tries` }, this);
        this.debug("couldn't reconnect.");
        break;
      default:
        this.currentReconnect++;
        this.#status = NodeStatus.RECONNECTING;
        this.debug(`reconnecting... current try: ${this.currentReconnect} out of ${this.reconnection.tries}`);
        await this.connect(this.manager.userId!);
    }
  }

  /**
   * Emits a debug message.
   * @param message The debug message.
   * @private
   */
  debug(message: string) {
    if (this.#manager.listenerCount(ManagerEvent.DEBUG)) {
      this.#manager.emit(ManagerEvent.DEBUG, `(node: ${this.id}) ${message.trim()}`);
    }
  }

  /**
   * Processes all of the queued payloads.
   * @private
   */
  protected async processQueue(): Promise<void> {
    if (!this.connected || this.#queue.length === 0) {
      return Promise.resolve();
    }

    return new Promise(async res => {
      while (this.#queue.length > 0) {
        const payload = this.#queue.shift();
        if (!payload) {
          return res();
        }

        await this.send(payload);
      }

      return res();
    });
  }

  /**
   * Cleans up the websocket listeners.
   * @since 1.0.0
   * @private
   */
  protected cleanUp(): void {
    if (this.#ws) {
      this.#ws.onclose = () => void 0;
      this.#ws.onerror = () => void 0;
      this.#ws.onopen = () => void 0;
      this.#ws.onmessage = () => void 0;
    }
  }

  /**
   * queues a reconnect.
   * @protected
   */
  protected queueReconnect() {
    if (this.#reconnectTimeout) {
      clearTimeout(this.#reconnectTimeout);
      this.#reconnectTimeout = null;
    }

    return this.#reconnectTimeout = setTimeout(() => this.reconnect(), this.reconnection.delay);
  }

  /**
   * Handles the "open" websocket event.
   * @private
   */
  private async handleOpen() {
    if (this.#reconnectTimeout) {
      clearTimeout(this.#reconnectTimeout);
      this.#reconnectTimeout = null;
      this.debug("successfully reconnected...");
    }

    this.#manager.emit(ManagerEvent.NODE_READY, this);
    this.#status = NodeStatus.CONNECTED;
    if (this.eventBuffer) {
      await this.configureEventBuffer(this.eventBuffer);
    }

    await this.processQueue();
  }

  /**
   * Handles the "message" websocket event.
   * @param data The message data.
   *
   * @private
   */
  private async handleMessage({ data }: WebSocket.MessageEvent) {
    if (data instanceof ArrayBuffer) {
      data = Buffer.from(data);
    } else if (Array.isArray(data)) {
      data = Buffer.concat(data);
    }

    let pk: any;
    try {
      pk = JSON.parse(data.toString());
    } catch (e) {
      this.#manager.emit(ManagerEvent.NODE_ERROR, e, this);
      return;
    }

    switch (pk.op) {
      case "connection-id":
        this.connectionId = pk.id;
        break;
      case "metadata":
        this.meta = pk.data;
        break;
      case "stats":
        this.stats = pk.stats;
        break;
      case "event":
      case "player-update":
        const player = this.players.get(pk.guildId);
        if (!player) {
          this.debug(`Received ${pk.op} for unknown player, guildId = ${pk.guildId}`);
        } else {
          if (pk.op === "event") {
            await player.handleEvent(pk);
          } else {
            player.state = pk.state;
          }
        }

        break;
    }

    this.#manager.emit(ManagerEvent.NODE_PACKET, pk, this);
  }

  /**
   * Handles the "close" websocket event.
   * @param event The event data.
   *
   * @private
   */
  private async handleClose(event: WebSocket.CloseEvent) {
    if (this.#status === NodeStatus.RECONNECTING) {
      return this.queueReconnect();
    }

    this.manager.emit(ManagerEvent.NODE_DISCONNECT, event, this);
    await this.reconnect();
  }

  /**
   * Handles the "error" websocket event.
   * @param event The event data.
   *
   * @private
   */
  private async handleError(event: WebSocket.ErrorEvent) {
    this.#manager.emit(ManagerEvent.NODE_ERROR, event.error ? event.error : event.message, this);
    if (this.#status === NodeStatus.RECONNECTING) {
      await this.queueReconnect();
    }
  }

  /**
   * Sends a payload to the andesite instance.
   * @private
   */
  private send(payload: unknown): Promise<void> {
    return new Promise((res, rej) => {
      this.#ws?.send(payload, err => {
        this.debug(`${err ? "-" : "+"} => ${payload}`);
        if (err) {
          this.manager.emit(ManagerEvent.NODE_ERROR, err, this);
          return rej(err);
        }

        return res();
      });
    });
  }
}
