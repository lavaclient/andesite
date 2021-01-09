import { EventEmitter } from "events";
import { FilterChain } from "./FilterChain";

import type {
  ConnectOptions,
  DiscordVoiceServer,
  DiscordVoiceState,
  Event,
  FilterMap,
  PlayerState,
  PlayerTransport,
  PlayOptions,
  TrackEndEvent,
  TrackExceptionEvent,
  TrackStartEvent,
  TrackStuckEvent,
  UpdatePlayer,
  VoiceServerUpdate,
  WebSocketClosedEvent,
} from "../types";
import type { Node } from "../node/Node";
import type { PlayerManager } from "../PlayerManager";

export abstract class Player extends EventEmitter {
  /**
   * The ID of the guild this player is for.
   */
  readonly guildId: string;

  /**
   * The ID of the channel this player is connected to.
   */
  channelId: string | null;

  /**
   * Whether this player is connected to a voice channel or not.
   */
  connected: boolean;

  /**
   * The state of this player.
   */
  state: PlayerState | null;

  /**
   * Whether this player is playing or not.
   */
  playing: boolean;

  /**
   * The current track that is playing.
   */
  track: string | null;

  /**
   * The timestamp in which this player started playing.
   */
  timestamp: number | null;

  /**
   * The session id to use for the VoiceServerUpdate method..
   * @private
   */
  #_sessionId: string | null = null;

  /**
   * The current voice server.
   * @private
   */
  #_server: DiscordVoiceServer | null = null;

  /**
   * The node this player is hosted on.
   * @private
   */
  readonly #node: Node;

  /**
   * @param node The node instance.
   * @param guildId The guild id instance.
   */
  protected constructor(node: Node, guildId: string) {
    super();

    this.#node = node;
    this.guildId = guildId;

    this.playing = false;
    this.timestamp = null;
    this.track = null;
    this.state = null;
    this.channelId = null;
    this.connected = false;
  }

  /**
   * Creates a player.
   * @param transport The transport to use. Either "websocket" or "rest".
   * @param node The node.
   * @param guildId The guild id.
   */
  static create(transport: PlayerTransport, node: Node, guildId: string): Player {
    return transport === "websocket"
      ? new (require("./impl/WebSocketPlayer").WebSocketPlayer)(node, guildId)
      : new (require("./impl/RESTPlayer").RESTPlayer)(node, guildId);
  }

  /**
   * The node this player is hosted on.
   */
  get node(): Node {
    return this.#node;
  }

  /**
   * The player manager.
   */
  get manager(): PlayerManager {
    return this.node.manager;
  }

  /**
   * The current filters that are applied.
   */
  get filters(): FilterChain {
    return new FilterChain(this, this.state?.filters);
  }

  /**
   */
  on<E extends keyof PlayerEvents>(event: E, listener: (args: PlayerEvents[E]) => void): this {
    return super.on(event, listener);
  }

  /**
   */
  once<E extends keyof PlayerEvents>(event: E, listener: (args: PlayerEvents[E]) => void): this {
    return super.once(event, listener);
  }

  /**
   */
  off<E extends keyof PlayerEvents>(event: E, listener: (args: PlayerEvents[E]) => void): any {
    return super.off(event, listener);
  }

  /**
   */
  emit<E extends keyof PlayerEvents>(event: E, ...args: PlayerEvents[E]): boolean {
    return this.listenerCount(event) ? super.emit(event, ...args) : false;
  }

  /**
   * Connects this player to a voice channel.
   * @param channel A voice channel object or id.
   * @param options Options for self deafening or muting.
   */
  connect(channel: string | { id: string } | null, options: ConnectOptions = {}): Player {
    const channel_id = (typeof channel === "object" ? channel?.id : channel) ?? null;

    this.debug(channel_id === null ? `disconnecting from ${this.channelId}` : `connecting to ${channel_id}`);
    this.node.manager.send(this.guildId, {
      op: 4,
      d: {
        guild_id: this.guildId,
        channel_id,
        self_mute: options.selfMute ?? false,
        self_deaf: options.selfDeaf ?? false,
      },
    });

    this.channelId = channel_id;
    return this;
  }

  /**
   * Disconnects this player from the voice channel.
   */
  disconnect(): Player {
    return this.connect(null);
  }

  /**
   * Fetches the player state from the andesite instance.
   */
  async fetchState(): Promise<PlayerState> {
    const state = await this.node.rest.make<PlayerState>(`/player/${this.guildId}`);
    return this.state = state;
  }

  /**
   * Handles an event sent by the andesite instance.
   * @param event The received event
   */
  async handleEvent(event: Event) {
    switch (event.type) {
      case "TrackEndEvent":
        if (event.reason !== "REPLACED") {
          this.playing = false;
        }

        this.timestamp = null;
        this.track = null;
        return this.emit("trackEnd", event);

      case "TrackStartEvent":
        this.playing = true;
        this.timestamp = Date.now();
        this.track = event.track;
        return this.emit("trackStart", event);

      case "TrackExceptionEvent":
        return this.emit("trackException", event);

      case "TrackStuckEvent":
        await this.stop();
        return this.emit("trackStuck", event);

      case "WebSocketClosedEvent":
        return this.emit("webSocketClosed", event);
    }
  }

  /**
   * Handles a voice server or state update.
   * @param update The voice server or state update.
   */
  async handleVoiceUpdate(update: DiscordVoiceServer | DiscordVoiceState): Promise<Player> {
    "token" in update
      ? this.#_server = update
      : this.#_sessionId = update.session_id;

    if (this.#_server && this.#_sessionId) {
      this.debug(`sending voice server update, sessionId = ${this.#_sessionId}, endpoint = ${this.#_server.endpoint}, token = ${this.#_server.token}`);
      await this.sendVoiceServerUpdate({
        event: this.#_server,
        guildId: this.guildId,
        sessionId: this.#_sessionId,
      });

      this.connected = true;
      this.#_sessionId = this.#_server = null;
    }

    return this;
  }

  /**
   * Resumes this player.
   */
  resume(): Promise<Player> {
    return this.setPaused(false);
  }

  /**
   * Plays a track on the guild.
   * @param track Base64 encoded lavaplayer track. If null, the player is stopped. Only use null for mixer players, for regular players use stop instead.
   * @param options
   * @returns {Promise<Player>}
   */
  abstract playTrack(track: string | { track: string }, options?: PlayOptions): Promise<Player>;

  /**
   * Stops playing audio on the guild.
   */
  abstract stop(): Promise<Player>;

  /**
   * Update the pause state of this player.
   * @param state Whether or not to pause the player
   */
  abstract setPaused(state?: boolean): Promise<Player>;

  /**
   * Update the track position.
   * @param pos Timestamp to set the current track to, in milliseconds
   */
  abstract seekTo(pos: number): Promise<Player>;

  /**
   * Update the volume of this player.
   * @param volume Volume to set on the player
   */
  abstract setVolume(volume?: number): Promise<Player>;

  /**
   * Configures the audio filters for the guild
   * @param filters The filter map.
   */
  abstract setFilters(filters: FilterMap | FilterChain): Promise<Player>;

  /**
   * Update the player.
   * @param payload The player update data.
   */
  abstract update(payload: UpdatePlayer): Promise<Player>;

  /**
   * Destroys this player.
   */
  abstract destroy(): Promise<Player>;

  /**
   * Provides a voice server update event to the andesite instance..
   * @param update The voice update payload.
   */
  protected abstract sendVoiceServerUpdate(update: VoiceServerUpdate): Promise<Player>;

  /**
   * Used for general debugging.
   * @param message The debug message.
   * @protected
   */
  protected debug(message: string) {
    return this.node.debug(`player[${this.guildId}]: ${message.trim()}`);
  }
}

interface PlayerEvents {
  trackStart: [ TrackStartEvent ];
  trackStuck: [ TrackStuckEvent ];
  trackEnd: [ TrackEndEvent ];
  trackException: [ TrackExceptionEvent ];
  webSocketClosed: [ WebSocketClosedEvent ];
  move: [ string ];
}
