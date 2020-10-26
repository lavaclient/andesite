interface Players {
	total: number;
	playing: number;
}

interface Vm {
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
	vm: Vm;
	spec: Spec;
	version: Version;
}

interface Os {
	processors: number;
	name: string;
	arch: string;
	version: string;
}

interface Cpu {
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

interface Gc {
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

interface FrameStat {
	user: string;
	guild: string;
	success: number;
	loss: number;
}

export interface NodeStats {
	players: Players;
	runtime: Runtime;
	os: Os;
	cpu: Cpu;
	classLoading: ClassLoading;
	thread: Thread;
	compilation: Compilation;
	memory: Memory;
	gc: Gc[];
	memoryPools: MemoryPool[];
	memoryManagers: MemoryManager[];
	frameStats: FrameStat[];
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
	password?: string;

	/**
	 * The name used for identifying this node.
	 */
	id?: string | number;

	/**
	 * Whether to use https/wss.
	 */
	secure?: boolean;

	/**
	 * The amount of reconnect tries that this node can use.
	 */
	reconnectTries?: number;
}

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

export interface NodeMetadata {
	loadedPlugins: string[];
	nodeRegion: string;
	versionRevision: string;
	enabledSources: string[];
	versionCommit: string;
	versionBuild: number;
	versionMajor: string;
	versionMinor: string;
	version: string;
	nodeId: string;
}