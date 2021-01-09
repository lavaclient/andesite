import { Player } from "../Player";
import { FilterChain } from "../FilterChain";

import type { RequestOptions } from "../../node/REST";
import type { FilterMap, PlayOptions, UpdatePlayer, VoiceServerUpdate } from "../../types";

export class RESTPlayer extends Player {
  // POST /player/:guild_id/play
  async playTrack(track: string | { track: string }, options: PlayOptions = {}): Promise<Player> {
    this.state = await this.makeRequest("/play", {
      method: "post",
      data: JSON.stringify({
        ...options,
        track: typeof track === "object" ? track.track : track,
      }),
    });

    return this;
  }

  // PATCH /player/:guild_id/pause
  async setPaused(state = true): Promise<Player> {
    this.state = await this.makeRequest("/pause", {
      method: "patch",
      data: JSON.stringify({ pause: state }),
    });

    return this;
  }

  // PATCH /player/:guild_id/seek
  async seekTo(position: number): Promise<Player> {
    this.state = await this.makeRequest("/seek", {
      method: "patch",
      data: JSON.stringify({ position }),
    });

    return this;
  }

  // POST /player/:guild_id/stop
  async stop(): Promise<Player> {
    this.state = await this.makeRequest("/stop", {
      method: "post",
    });

    return this;
  }

  // PATCH /player/:guild_id/filters
  async setFilters(filters: FilterMap | FilterChain): Promise<Player> {
    this.state = await this.makeRequest("/filters", {
      method: "patch",
      data: JSON.stringify(filters instanceof FilterChain ? filters.toJSON() : filters),
    });

    return this;
  }

  // PATCH /player/:guild_id/volume
  async setVolume(volume = 100): Promise<Player> {
    this.state = await this.makeRequest("/volume", {
      method: "patch",
      data: JSON.stringify({ volume }),
    });

    return this;
  }

  // PATCH /player/:guild_id/update
  async update(payload: UpdatePlayer): Promise<Player> {
    this.state = await this.makeRequest("", {
      data: JSON.stringify(payload),
    });

    return this;
  }

  // DELETE /player/:guild_id
  async destroy(): Promise<Player> {
    await this.makeRequest("", {
      method: "delete",
    });

    return this;
  }

  // POST /player/:guild_id/voice-server-update
  protected async sendVoiceServerUpdate(update: VoiceServerUpdate): Promise<Player> {
    await this.node.rest.make("/player/voice-server-update", {
      method: "post",
      data: JSON.stringify(update),
    });

    return this;
  }

  /**
   * Makes a request to the andesite node.
   * @private
   */
  private makeRequest<T>(endpoint: string, options: RequestOptions): Promise<T> {
    endpoint = /^\//m.test(endpoint) ? endpoint : `/${endpoint}`;
    return this.node.rest.make(`/player/${this.guildId}${endpoint}`, options);
  }
}