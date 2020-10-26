export interface Equalizer {
	bands: Band[];
}

export interface Band {
	band: number;
	gain?: number;
}

export interface Karaoke {
	level?: number;
	monoLevel?: number;
	filterBand?: number;
}

export interface Volume {
	volume: number
}

export interface Timescale {
	speed?: number;
	pitch?: number;
	rate?: number;
}

export interface Tremolo {
	frequency?: number;
	depth?: number;
}

export interface Vibrato {
	frequency?: number;
	depth?: number;
}

export interface LoadError {
	class: string;
	message?: string;
	stack: StackFrame[];
	cause?: LoadError;
	suppressed: LoadError[];
}

export interface StackFrame {
	classLoader?: string;
	moduleName?: string;
	moduleVersion?: string;
	className: string;
	methodName: string;
	fileName?: string;
	lineNumber?: number;
	pretty: string;
}

export interface Play {
	track: string;
	start?: number;
	end?: number;
	pause?: boolean;
	volume?: number;
	noReplace: boolean
}

export interface LoadedTracks {
	loadType: LoadTypes;
	tracks?: TrackInfo[];
	playlistInfo?: PlaylistInfo;
	cause?: LoadError;
	severity: string;
}

export interface FilterMap {
	equalizer: Equalizer | null;
	karaoke: Karaoke | null;
	timescale: Timescale | null;
	tremolo: Tremolo | null;
	vibrato: Vibrato | null;
	volume: Volume | null;
}

export interface PlaylistInfo {
	name: string;
	selectedTrack: number;
}

export interface TrackInfo {
	track: string;
	info: TrackMeta;
}

export interface TrackMeta {
	class: string;
	title: string;
	author: string;
	length: number;
	identifier: string;
	uri: string;
	isStream: boolean;
	isSeekable: boolean;
	position: number;
}

export interface MixerPlayer {
	time: string;
	position?: number;
	paused: boolean;
	volume: number;
	filters: FilterMap;
}

export interface AndesitePlayer {
	time: string;
	position?: number;
	paused: boolean;
	volume: number;
	filters: FilterMap;
	mixer: Map<string, MixerPlayer>
	mixerEnabled: boolean;
}

export type LoadTypes = "TRACK_LOADED" | "SEARCH_RESULT" | "PLAYLIST_LOADED" | "NO_MATCHES" | "LOAD_FAILED";

export type FilterNames = "equalizer" | "karaoke" | "timescale" | "tremolo" | "vibrato" | "volume";

