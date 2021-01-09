interface Players {
  total: number;
  playing: number;
}

interface VirtualMachine {
  name: string;
  vendor: string;
  version: string;
}

interface Spec {
  name: string;
  vendor: string;
  version: string;
}

interface Version {
  feature: number;
  interim: number;
  update: number;
  patch: number;
  pre: string | null;
  build: number;
  optional: string;
}

interface Runtime {
  uptime: number;
  pid: number;
  managementSpecVersion: string;
  name: string;
  vm: VirtualMachine;
  spec: Spec;
  version: Version;
}

interface OperatingSystem {
  processors: number;
  name: string;
  arch: string;
  version: string;
}

interface CPU {
  andesite: number;
  system: number;
}

interface ClassLoading {
  loaded: number;
  totalLoaded: number;
  unloaded: number;
}

interface Thread {
  running: number;
  daemon: number;
  peak: number;
  totalStarted: number;
}

interface Compilation {
  name: string;
  totalTime: number;
}

interface Heap {
  init: number;
  used: number;
  committed: number;
  max: number;
}

interface NonHeap {
  init: number;
  used: number;
  committed: number;
  max: number;
}

interface Memory {
  pendingFinalization: number;
  heap: Heap;
  nonHeap: NonHeap;
}

interface GarbageCollector {
  name: string;
  collectionCount: number;
  collectionTime: number;
  pools: string[];
}

interface CollectionUsage {
  init: number;
  used: number;
  committed: number;
  max: number;
}

interface PeakUsage {
  init: number;
  used: number;
  committed: number;
  max: number;
}

interface Usage {
  init: number;
  used: number;
  committed: number;
  max: number;
}

interface MemoryPool {
  name: string;
  type: string;
  collectionUsage: CollectionUsage;
  collectionUsageThreshold?: number;
  collectionUsageThresholdCount?: number;
  peakUsage: PeakUsage;
  usage: Usage;
  usageThreshold?: number;
  usageThresholdCount?: number;
  managers: string[];
}

interface MemoryManager {
  name: string;
  pools: string[];
}

interface FrameStatistic {
  user: string;
  guild: string;
  success: number;
  loss: number;
}

export interface NodeStats {
  players: Players;
  runtime: Runtime;
  os: OperatingSystem;
  cpu: CPU;
  classLoading: ClassLoading;
  thread: Thread;
  compilation: Compilation;
  memory: Memory;
  gc: GarbageCollector[];
  memoryPools: MemoryPool[];
  memoryManagers: MemoryManager[];
  frameStats: FrameStatistic[];
}

export interface NodeMetadata {
  /**
   * List of plugins loaded.
   */
  loadedPlugins: string[];

  /**
   * Region defined in the config.
   */
  nodeRegion: string;

  /**
   * Revision version of the node.
   */
  versionRevision: string;

  /**
   * List of sources enabled in the config.
   */
  enabledSources: string[];

  /**
   * Commit hash of the node.
   */
  versionCommit: string;

  /**
   * Build number provided by the CI
   */
  versionBuild: number;

  /**
   * Major version of the node.
   */
  versionMajor: string;

  /**
   * Minor version of the node.
   */
  versionMinor: string;

  /**
   * Version of the node.
   */
  version: string;

  /**
   * ID defined in the config.
   */
  nodeId: string;
}

export interface Equalizer {
  /**
   * Array of bands to configure.
   */
  bands: Band[];
}

export interface Band {
  /**
   * Band number to configure
   */
  band: number;

  /**
   * Value to set for the band.
   * @default 0
   */
  gain?: number;
}

export interface Karaoke {
  /**
   * @default 1
   */
  level?: number;

  /**
   * @default 1
   */
  monoLevel?: number;

  /**
   * @default 220
   */
  filterBand?: number;

  /**
   * @default 100
   */
  filterWidth?: number;
}

export interface Volume {
  volume: number
}

export interface Timescale {
  /**
   * Speed to play music at.
   * @default 1
   */
  speed?: number;

  /**
   * Pitch to set.
   * @default 1
   */
  pitch?: number;

  /**
   * Rate to set.
   * @default 1
   */
  rate?: number;
}

export interface Tremolo {
  /**
   * @default 2
   */
  frequency?: number;

  /**
   * @default 0.5
   */
  depth?: number;
}

export interface Vibrato {
  /**
   * @default 2
   */
  frequency?: number;

  /**
   * @default 0.5
   */
  depth?: number;
}

export interface StackFrame {
  /**
   * Name of the class loader.
   */
  classLoader: string | null

  /**
   * Name of the module.
   */
  moduleName: string | null;

  /**
   * Version of the module.
   */
  moduleVersion: string | null;

  /**
   * Name of the class.
   */
  className: string;

  /**
   * Name of the method.
   */
  methodName: string;

  /**
   * Name of the source file.
   */
  fileName: string | null;

  /**
   * Line in the source file.
   */
  lineNumber: number | null;

  /**
   * Pretty printed version of this frame, as it would appear on Throwable#printStackTrace
   */
  pretty: string;
}

export interface LoadTracksResponse {
  /**
   * Type* of the response
   */
  loadType: LoadTypes;

  /**
   * Loaded tracks.
   */
  tracks: TrackInfo[] | null;

  /**
   * Metadata of the loaded playlist.
   */
  playlistInfo: PlaylistInfo | null;

  /**
   * Error that occurred while loading tracks.
   */
  cause: Exception | null;

  /**
   * Severity of the error.
   */
  severity: string | null;
}

export interface FilterMap {
  equalizer?: Equalizer | null;
  karaoke?: Karaoke | null;
  timescale?: Timescale | null;
  tremolo?: Tremolo | null;
  vibrato?: Vibrato | null;
  volume?: Volume | null;
}

export interface EventBase {
  type: EventType;
  guildId: string;
  userId: string;
}

export interface TrackStartEvent extends EventBase {
  type: "TrackStartEvent";
  track: string;
}

export interface TrackEndEvent {
  type: "TrackEndEvent";
  track: string;
  reason: TrackEndReason;
  mayStartNext: boolean;
}

export interface TrackExceptionEvent {
  type: "TrackExceptionEvent";
  track: string;
  error: string;
  exception: Exception;
}

export interface TrackStuckEvent {
  type: "TrackStuckEvent";
  track: string;
  thresholdMs: number;
}

export interface WebSocketClosedEvent {
  type: "WebSocketClosedEvent";
  reason: string;
  code: number;
  byRemote: boolean;
}

export interface Exception {
  /**
   * Class of the error.
   */
  class: string;

  /**
   * Message of the error.
   */
  message: string | null;

  /**
   * Stacktrace of the error.
   */
  stack: StackFrame;

  /**
   * Cause of the error.
   */
  cause: Exception | null;

  /**
   * Suppressed errors.
   */
  suppressed: Exception[];
}

export interface PlaylistInfo {
  /**
   * Name of the playlist.
   */
  name: string;

  /**
   * Index of the selected track in the tracks array, or null if no track is selected.
   */
  selectedTrack: number;
}

export interface TrackInfo {
  /**
   * Base64 encoded track.
   */
  track: string;

  /**
   * Metadata of the track.
   */
  info: TrackMetadata;
}

export interface TrackMetadata {
  /**
   * Class name of the lavaplayer track.
   */
  class: string;

  /**
   * Title of the track.
   */
  title: string;

  /**
   * Author of the track.
   */
  author: string;

  /**
   * Duration of the track, in milliseconds.
   */
  length: number;

  /**
   * Identifier of the track.
   */
  identifier: string;

  /**
   * URI of the track.
   */
  uri: string;

  /**
   * Whether or not the track is a livestream
   */
  isStream: boolean;

  /**
   * Whether or not the track supports seeking
   */
  isSeekable: boolean;

  /**
   * Current position of the track
   */
  position: number;
}

export interface MixerPlayer {
  /**
   * Current unix timestamp on the node.
   */
  time: string;

  /**
   * Position of the current playing track, or null if nothing is playing
   */
  position?: number;

  /**
   * Whether or not the player is paused
   */
  paused: boolean;

  /**
   * The volume of the player.
   */
  volume: number;

  /**
   * Map of filter name -> filter settings for each filter present
   */
  filters: FilterMap;
}

export interface DiscordVoiceServer {
  token: string;
  guild_id: string;
  endpoint: string;
}

export interface DiscordVoiceState {
  channel_id?: string;
  user_id: string;
  guild_id: string;
  session_id: string;
}

export interface CreatePlayerOptions {
  /**
   * The player transport to use.
   */
  transport?: PlayerTransport;

  /**
   * The node to use, defaults to the first ideal node.
   */
  node?: string;
}

export interface PlayerManagerOptions {
  /**
   * The nodes to connect to.
   */
  nodes?: NodeOptions[];

  /**
   * A method used for sending voice updates to Discord.
   */
  send: SendMethod;

  /**
   * The user id for the client.
   */
  userId?: string;

  /**
   * Default reconnection options.
   */
  reconnectionDefaults?: ReconnectionOptions;

  /**
   * When a connection is closed, events will be buffered for up to the timeout specified.
   */
  eventBuffer?: number;
}

export interface PlayerState {
  /**
   * Current unix timestamp on the node.
   */
  time: string;

  /**
   * Position of the current playing track, or null if nothing is playing
   */
  position: number | null;

  /**
   * Whether or not the player is paused
   */
  paused: boolean;

  /**
   * The volume of the player.
   */
  volume: boolean;

  /**
   * Map of filter name -> filter settings for each filter present.
   */
  filters: FilterMap;

  /**
   * Map of mixer player id -> mixer player
   */
  mixer: MixerPlayer

  /**
   * Whether or not the mixer is the current source of audio.
   */
  mixerEnabled: boolean;
}

export interface UpdatePlayer {
  /**
   * Whether or not to pause the player.
   */
  pause?: boolean;

  /**
   * Timestamp to set the current track to, in milliseconds.
   */
  position?: number;

  /**
   * Volume to set on the player.
   */
  volume?: number;

  /**
   * Configuration for the filters.
   */
  filters?: FilterMap;
}

export interface PlayOptions {
  /**
   * Timestamp, in milliseconds, to start the track.
   */
  start?: number;

  /**
   * Timestamp, in milliseconds, to end the track
   */
  end?: number;

  /**
   * Whether or not to pause the player
   */
  pause?: boolean;

  /**
   * Volume to set on the player
   */
  volume?: number;

  /**
   * If true and a track is already playing/paused, this command is ignored
   */
  noReplace?: boolean;
}

export interface ConnectOptions {
  /**
   * Whether to automatically mute the bot when joining.
   */
  selfMute?: boolean;

  /**
   * Whether to automatically deafen the bot when joining.
   */
  selfDeaf?: boolean;
}

export interface VoiceServerUpdate {
  /**
   * Session ID for the current user in the event's guild.
   */
  sessionId: string;

  /**
   * ID of the guild.
   */
  guildId: string;

  /**
   * Voice server update event sent by discord.
   */
  event: DiscordVoiceServer
}

export interface NodeOptions {
  /**
   * The host name of the node.
   */
  host: string;

  /**
   * The port that the node is on.
   */
  port: number | string;

  /**
   * The authorization used for connecting. You can omit this if you didn't set a password.
   */
  auth?: string;

  /**
   * The identifier for this node..
   */
  id?: string | number;

  /**
   * Whether to use https/wss.
   */
  secure?: boolean;

  /**
   * How often to ping the andesite instance, in milliseconds. This can be omitted if you do not want to ping the node.
   */
  pingInterval?: number;

  /**
   * When a connection is closed, events will be buffered for up to the timeout specified.
   */
  eventBuffer?: number;

  /**
   * The reconnection options for this node.
   */
  reconnection?: ReconnectionOptions;
}

export interface ReconnectionOptions {
  /**
   * The delay between each reconnection.
   */
  delay?: number;

  /**
   * The total number of reconnection tries.
   */
  tries?: number;
}

/**
 * "websocket" - controls the player via websocket
 * "rest"      - controls the player through the rest api.
 */
export type PlayerTransport = "websocket" | "rest"

export type Dictionary<T = any> = Record<string, T>;

export type SendMethod = (id: string, payload: any) => any;

export type Event = TrackStartEvent | TrackEndEvent | TrackExceptionEvent | TrackStuckEvent | WebSocketClosedEvent;

export type TrackEndReason = "FINISHED" | "LOAD_FAILED" | "STOPPED" | "REPLACED" | "CLEANUP";

export type EventType =
  "TrackStartEvent"
  | "TrackEndEvent"
  | "TrackExceptionEvent"
  | "TrackStuckEvent"
  | "WebSocketClosedEvent";


/**
 * - TRACK_LOADED - tracks will only have one track, playlistInfo, cause and severity will be null.
 * - SEARCH_RESULT - cause and severity will be null.
 * - PLAYLIST_LOADED - cause and severity will be null.
 * - NO_MATCHES - all other fields will be null.
 * - LOAD_FAILED - tracks and playlistInfo will be null.
 */
export type LoadTypes = "TRACK_LOADED" | "SEARCH_RESULT" | "PLAYLIST_LOADED" | "NO_MATCHES" | "LOAD_FAILED";
