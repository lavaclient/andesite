import phin, { IJSONResponseOptions } from "phin";
import { EventEmitter } from "events";

import type { Node } from "./Node";
import type { LoadTracksResponse, NodeStats, TrackInfo, Dictionary } from "../types";

export class REST extends EventEmitter {
  /**
   * The node instance.
   */
  readonly node: Node;

  /**
   * Request analytics.
   */
  requests: { successful: number; failed: number; };

  /**
   * @param node The node this rest manager belongs to.
   */
  constructor(node: Node) {
    super();

    this.node = node;
    this.requests = {
      failed: 0,
      successful: 0,
    };
  }

  /**
   * The base url for all requests.
   */
  get baseUrl(): string {
    return `http${this.node.secure ? "s" : ""}://${this.node.host}${this.node.port ? `:${this.node.port}` : ""}`;
  }

  /**
   * Returns stats about the andesite instance.
   */
  getStats(): Promise<NodeStats> {
    return this.make("/stats");
  }

  /**
   * Loads tracks with the provided identifier..
   * @param identifier The search identifier.
   */
  loadTracks(identifier: string): Promise<LoadTracksResponse> {
    return this.make(`/loadtracks?identifier=${identifier}`);
  }

  /**
   * Returns metadata for the provided track.
   *
   * @param track The track to decode.
   */
  decodeTracks(track: string): Promise<TrackInfo>;

  /**
   * Returns metadata for the provided tracks.
   *
   * @param track The tracks to decode.
   */
  decodeTracks(track: string[]): Promise<TrackInfo[]>;
  decodeTracks(tracks: string | string[]): Promise<TrackInfo | TrackInfo[]> {
    const data = Array.isArray(tracks)
      ? tracks
      : { track: tracks };

    return this.make<TrackInfo | TrackInfo[]>(`/decodetrack${Array.isArray(tracks) ? "s" : ""}`, {
      method: "post",
      data: JSON.stringify(data),
    });
  }

  /**
   * @param event
   * @param args
   */
  emit(event: string, ...args: any[]): boolean {
    if (this.listenerCount(event)) {
      return super.emit(event, ...args);
    }

    return false;
  }

  /**
   * Makes a request to the andesite instance.
   *
   * @param endpoint The endpoint to make a request to.
   * @param options Additional request options
   */
  async make<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    endpoint = /^\//m.test(endpoint) ? endpoint : `/${endpoint}`;

    options.method ??= "get";
    options.headers ??= {};
    options.headers["User-Id"] = this.node.manager.userId!;

    if (this.node.auth) {
      options.headers.authorization = this.node.auth;
    }

    const result = await phin<T>({
        ...options,
        url: `${this.baseUrl}${endpoint}`,
        parse: "json",
      }),
      statusCode = result.statusCode!;

    let success = true;
    if (statusCode >= 200 && statusCode < 300) {
      this.requests.successful++;
    } else {
      success = false;
      this.requests.failed++;
    }

    this.node.debug(`rest: ${success ? "+" : "-"} ${options.method.toUpperCase()} ${this.baseUrl}${endpoint}`);
    this.emit("request", {
      endpoint, ...options,
      success,
    });

    return result.body;
  }
}

export type RequestOptions = Omit<IJSONResponseOptions, "url" | "parse"> & {
  data?: { toString(): string }
  headers?: Dictionary<string>
}
