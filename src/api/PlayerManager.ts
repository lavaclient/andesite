import { EventEmitter } from "events";
import { Node } from "./node/Node";

import type { Player } from "./player/Player";
import type WebSocket from "ws";
import type {
  CreatePlayerOptions,
  DiscordVoiceServer,
  DiscordVoiceState,
  NodeOptions,
  PlayerManagerOptions,
  ReconnectionOptions,
  SendMethod,
  Dictionary
} from "./types";

export enum ManagerEvent {
  NODE_READY = "nodeReady",
  NODE_ERROR = "nodeError",
  NODE_PACKET = "nodePacket",
  NODE_DISCONNECT = "nodeDisconnect",
  DEBUG = "debug"
}

export class PlayerManager extends EventEmitter {
  /**
   * All connected nodes.
   */
  readonly nodes: Map<string | number, Node>;

  /**
   * The send method used for disconnecting/connecting from voice channels.
   */
  readonly send: SendMethod;

  /**
   * The configured user id.
   */
  userId: string | null = null;

  /**
   * Default reconnection options.
   */
  reconnectionDefaults: Required<ReconnectionOptions>;

  /**
   * The default event buffer to use for all configured nodes.
   */
  eventBuffer?: number;

  /**
   * The current player map.
   * @private
   */
  #_players: Map<string, Player> | null = null;

  /**
   * The configured nodes.
   * @private
   */
  readonly #_nodes: (NodeOptions & { id: string | number })[];

  /**
   * @param options The player manager options.
   */
  constructor(options: PlayerManagerOptions) {
    super();

    if (!options.send || typeof options.send !== "function") {
      throw new Error("You must provide a function for the \"send\" option.");
    }

    this.nodes = new Map();
    this.userId = options.userId ?? null;
    this.send = options.send;
    this.reconnectionDefaults = {
      delay: options.reconnectionDefaults?.delay ?? 10000,
      tries: options.reconnectionDefaults?.tries ?? 5,
    };

    this.#_nodes = options.nodes?.map((o, i) => ({
      id: i, ...o,
    })) ?? [];
  }

  /**
   * An array of ideal nodes, sorted by the amount of penalties one has.
   */
  get ideal(): Node[] {
    return [ ...this.nodes.values() ].sort((a, b) => a.penalties - b.penalties);
  }

  /**
   * Every player spanning across each configured node..
   */
  get players(): Map<string, Player> {
    if (!this.#_players) {
      this.#_players = new Map<string, Player>();
      for (const [ , node ] of this.nodes) {
        for (const [ id, player ] of node.players) {
          this.#_players.set(id, player);
        }
      }
    }

    return this.#_players;
  }

  /**
   * Initializes every configured node.
   * @param userId The user id to use.
   */
  async init(userId: string | null = this.userId) {
    if (!userId) {
      throw new Error("You must provide a user id.");
    }

    this.userId = userId;
    for (const [ id, node ] of this.nodes) {
      await node.close();
      this.nodes.delete(id);
    }

    for (const options of this.#_nodes) {
      const node = new Node(this, options as Required<NodeOptions>);
      await node.connect(userId);
      this.nodes.set(node.id, node);
    }
  }

  /**
   * Creates a new player.
   *
   * @param guildId The guild id.
   * @param options The transport and node to use.
   *
   * @returns The created player.
   */
  createPlayer(guildId: string, options: CreatePlayerOptions = {}) {
    const node = options.node && this.nodes.has(options.node)
      ? this.nodes.get(options.node)
      : this.ideal[0];

    if (!node) {
      throw new Error("No nodes available.");
    }

    this.#_players = null;
    return node.createPlayer(guildId, options.transport);
  }

  /**
   * Destroys a player.
   *
   * @param guildId The Guild ID of the player to destroy.
   *
   * @returns Whether the player was destroyed.
   */
  async destroyPlayer(guildId: string): Promise<boolean> {
    this.#_players = null;
    return await this.players.get(guildId)?.node?.destroyPlayer(guildId) ?? false;
  }

  /**
   * Used for providing voice server updates to lavalink.
   * @param update The voice server update sent by Discord.
   */
  public async serverUpdate(update: DiscordVoiceServer): Promise<void> {
    const player = this.players.get(update.guild_id);
    if (player) {
      await player.handleVoiceUpdate(update);
    }

    return;
  }

  /**
   * Used for providing voice state updates to lavalink
   * @param update The voice state update sent by Discord.
   */
  public async stateUpdate(update: DiscordVoiceState): Promise<void> {
    const player = this.players.get(update.guild_id);
    if (player && update.user_id === this.userId) {
      if (update.channel_id !== player.channelId) {
        player.emit("move", update.channel_id!);
        player.channelId = update.channel_id!;
      }

      await player.handleVoiceUpdate(update);
    }
  }
}

export interface PlayerManager {
  on<E extends keyof PlayerManagerEvents>(event: E, listener: (...args: PlayerManagerEvents[E]) => void): this;

  once<E extends keyof PlayerManagerEvents>(event: E, listener: (...args: PlayerManagerEvents[E]) => void): this;

  off<E extends keyof PlayerManagerEvents>(event: E, listener: (...args: PlayerManagerEvents[E]) => void): this;

  emit<E extends keyof PlayerManagerEvents>(event: E, ...args: PlayerManagerEvents[E]): boolean;
}

interface PlayerManagerEvents {
  [ManagerEvent.NODE_READY]: [ Node ];
  [ManagerEvent.NODE_DISCONNECT]: [ Partial<Omit<WebSocket.CloseEvent, "reason">> & { reason: string }, Node ];
  [ManagerEvent.NODE_PACKET]: [ Dictionary, Node ];
  [ManagerEvent.NODE_ERROR]: [ Error | string, Node ];
  [ManagerEvent.DEBUG]: [ string ];
}

