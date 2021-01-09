import { Player } from "../Player";
import { FilterChain } from "../FilterChain";

import type { Dictionary, FilterMap, PlayOptions, UpdatePlayer, VoiceServerUpdate } from "../../types";

export class WebSocketPlayer extends Player {
  async playTrack(track: string | { track: string }, options: PlayOptions = {}): Promise<Player> {
    await this.make("play", {
      track: typeof track === "object" ? track.track : track,
      ...options,
    });

    return this;
  }

  async stop(): Promise<Player> {
    await this.make("stop", {});
    return this;
  }

  async setPaused(state: boolean): Promise<Player> {
    await this.make("pause", {
      pause: state,
    });

    return this;
  }

  async seekTo(position: number): Promise<Player> {
    await this.make("seek", {
      position,
    });

    return this;
  }

  async setVolume(volume = 100): Promise<Player> {
    await this.make("volume", {
      volume,
    });

    return this;
  }

  async setFilters(filters: Partial<FilterMap> | FilterChain = {}): Promise<Player> {
    const data = filters instanceof FilterChain
      ? filters.toJSON()
      : filters;

    await this.make("filters", data);
    return this;
  }

  async update(payload: UpdatePlayer): Promise<Player> {
    await this.make("update", payload);
    return this;
  }

  async destroy(): Promise<Player> {
    await this.make("destroy", {});
    return this;
  }

  protected async sendVoiceServerUpdate(update: VoiceServerUpdate): Promise<Player> {
    await this.make("voice-server-update", update);
    return this;
  }

  private async make<OP extends keyof PlayerOperations, P extends PlayerOperations[OP]>(op: OP, payload: P) {
    await this.node.sendWs({
      op,
      guildId: this.guildId,
      ...payload,
    }, op === "voice-server-update");
  }
}

interface PlayerOperations extends Dictionary {
  "voice-server-update": VoiceServerUpdate;
  play: { track: string; } & PlayOptions;
  stop: {}
  pause: { pause: boolean; }
  seek: { position: number; }
  volume: { volume: number; }
  filters: Partial<FilterMap>;
  update: UpdatePlayer
  destroy: {}
}
