import type { Player } from "./Player";
import type { Band, Equalizer, FilterMap, Karaoke, Timescale, Tremolo, Vibrato, Volume } from "../types";

export class FilterChain {
  /**
   * The equalizer filter.
   * @private
   */
  #equalizer: Equalizer | null;

  /**
   * The timescale filter.
   * @private
   */
  #timescale: Timescale | null;

  /**
   * The tremolo filter.
   * @private
   */
  #tremolo: Tremolo | null;

  /**
   * The karaoke filter.
   * @private
   */
  #karaoke: Karaoke | null;

  /**
   * The volume filter.
   * @private
   */
  #volume: number | null;

  /**
   * The vibrato filter.
   * @private
   */
  #vibrato: Vibrato | null;

  /**
   * The player instance.
   * @private
   */
  readonly #player: Player;

  /**
   * @param player The player instance.
   * @param base
   */
  constructor(player: Player, base?: FilterMap) {
    this.#player = player;
    this.#volume = base?.volume?.volume ?? 1.0;
    this.#equalizer = base?.equalizer ?? null;
    this.#timescale = base?.timescale ?? null;
    this.#tremolo = base?.tremolo ?? null;
    this.#karaoke = base?.karaoke ?? null;
    this.#vibrato = base?.vibrato ?? null;
  }

  /**
   * Runs several checks on a timescale filter.
   * @param timescale
   */
  static validateTimescale(timescale: Timescale) {
    if (timescale.pitch && timescale.pitch <= 0) {
      throw new RangeError("Timescale#pitch must be greater than 0");
    }

    if (timescale.rate && timescale.rate <= 0) {
      throw new RangeError("Timescale#rate must be greater than 0");
    }

    if (timescale.speed && timescale.speed <= 0) {
      throw new RangeError("Timescale#speed must be greater than 0");
    }
  }

  /**
   * Runs several checks on a tremolo filter.
   * @param tremolo
   */
  static validateTremolo(tremolo: Tremolo) {
    if (tremolo.frequency && tremolo.frequency <= 0) {
      throw new RangeError("Tremolo#frequency: <= 0");
    }

    if (tremolo.depth && (tremolo.depth <= 0 || tremolo.depth > 1)) {
      throw new RangeError("Tremolo#depth: <= 0 or > 1");
    }
  }

  /**
   * Runs several checks on a vibrato filter.
   * @param vibrato
   */
  static validateVibrato(vibrato: Vibrato) {
    if (vibrato.frequency && (vibrato.frequency <= 0 || vibrato.frequency > 14)) {
      throw new RangeError("Vibrato#frequency: <= 0 or > 14");
    }

    if (vibrato.depth && (vibrato.depth <= 0 || vibrato.depth > 1)) {
      throw new RangeError("Vibrato#depth: <= 0 or > 1");
    }
  }

  /**
   * Runs a check on a volume filter.
   * @param volume
   */
  static validateVolume({ volume }: Volume) {
    if (volume <= 0 || volume > 5) {
      throw new RangeError("Volume#volume: <= 0 or > 5");
    }
  }

  /**
   * Returns true if the difference between a given value and the default.
   * is greater or equal to 0.01;.
   *
   * @param val Value to check.
   * @param def Default value.
   */
  static isSet(val: number, def: number): boolean {
    return Math.abs(val - def) >= .01;
  }

  /**
   * The configured equalizer filter.
   */
  getEqualizer(): Equalizer | null {
    return this.#equalizer;
  }

  /**
   * Configures the equalizer filter.
   * @param bands The gain values for each band.
   */
  setEqualizer(...bands: number[]): FilterChain;

  /**
   * Set the equalizer bands.
   * @param bands The bands to supply.
   */
  setEqualizer(...bands: Band[]): FilterChain;

  setEqualizer(...bands: (Band | number)[]): FilterChain {
    if (!bands.length) {
      this.#equalizer = null;
      return this;
    }

    if (typeof bands[0] === "number") {
      const result: Band[] = [];

      let band = 0;
      for (const gain of bands) {
        if (typeof gain !== "number") {
          throw new Error(`Array Element ${band} is not a number, make sure each element is a number.`);
        }

        result.push({
          band: band++,
          gain,
        });
      }

      this.#equalizer = {
        bands: result,
      };

      return this;
    }

    if (bands.some(b => typeof b === "number")) {
      throw new Error("FilterChain#setEqualizer: One element is an element, make sure each element is an object.");
    }

    this.#equalizer = {
      bands: bands as Band[],
    };

    return this;
  }

  /**
   * Returns whether the equalizer filter is enabled.
   */
  isEqualizerEnabled(): Boolean {
    return this.#equalizer !== null && this.#equalizer.bands.some(b => b.gain !== 0.0);
  }

  /**
   * Get the current volume of the player.
   * @param toPercentage Whether to convert the current volume to a percentage (0-100 instead of 0-1)
   */
  getVolume(toPercentage: boolean = false): number {
    if (this.#volume === null) {
      return toPercentage ? 100 : 1.0;
    }

    return toPercentage ? Math.floor(this.#volume * 100) : this.#volume;
  }

  /**
   * Configure the volume for this player.
   * @param volume The volume amount (must be 0-5) or null to reset the volume.
   */
  setVolume(volume: number | null): FilterChain {
    if (volume === null) {
      this.#volume = 1.0;
      return this;
    }

    FilterChain.validateVolume({ volume });
    this.#volume = volume;

    return this;
  }

  /**
   * The current karaoke configuration.
   */
  getKaraoke(): Karaoke | null {
    return this.#karaoke;
  }

  /**
   * Configure the karaoke filter.
   * @param level
   * @param monoLevel
   * @param filterBand
   */
  setKaraoke(level?: number, monoLevel?: number, filterBand?: number): FilterChain

  /**
   * Configure the karaoke filter.
   * @param data The karaoke filter data.
   */
  setKaraoke(data?: Karaoke): FilterChain

  setKaraoke(dataOrLevel?: Karaoke | number, monoLevel?: number, filterBand?: number): FilterChain {
    if (typeof dataOrLevel === "number") {
      this.#karaoke = {
        level: dataOrLevel,
        monoLevel,
        filterBand,
      };

      return this;
    }

    this.#karaoke = dataOrLevel ?? null;
    return this;
  }

  /**
   * The current timescale configuration.
   */
  getTimescale(): Timescale | null {
    return this.#timescale;
  }

  /**
   * Configure the timescale filter.
   * @param speed The track speed.
   * @param pitch The track pitch
   * @param rate The track rate
   */
  setTimescale(speed?: number, pitch?: number, rate?: number): FilterChain

  /**
   * Configure the timescale filter.
   * @param data The timescale filter data.
   */
  setTimescale(data?: Timescale): FilterChain

  setTimescale(dataOrSpeed?: Timescale | number, pitch?: number, rate?: number): FilterChain {
    if (typeof dataOrSpeed === "number") {
      this.#timescale = {
        speed: dataOrSpeed,
        pitch: pitch ?? 1.0,
        rate: rate ?? 1.0,
      };

      FilterChain.validateTimescale(this.#timescale);
      return this;
    }

    if (dataOrSpeed) {
      FilterChain.validateTimescale(dataOrSpeed);
    }

    this.#timescale = dataOrSpeed ?? null;
    return this;
  }

  /**
   * Check whether the timescale filter is enabled.
   */
  isTimescaleEnabled(): boolean {
    if (this.#timescale === null) {
      return false;
    }

    const {
      rate,
      speed,
      pitch,
    } = this.#timescale;

    return [ rate, speed, pitch ].some(value => value && FilterChain.isSet(value, 1.0));
  }

  /**
   * The current karaoke configuration.
   */
  getTremolo(): Tremolo | null {
    return this.#tremolo;
  }

  /**
   * Configure the tremolo filter.
   * @param depth
   * @param frequency
   */
  setTremolo(depth?: number, frequency?: number): FilterChain

  /**
   * Configure the tremolo filter.
   * @param data The tremolo filter data.
   */
  setTremolo(data?: Tremolo): FilterChain

  setTremolo(dataOrDepth?: Tremolo | number, frequency?: number): FilterChain {
    if (typeof dataOrDepth === "number") {
      const tremolo = {
        depth: dataOrDepth,
        frequency,
      };

      FilterChain.validateTremolo(tremolo);
      this.#tremolo = tremolo;

      return this;
    }

    if (dataOrDepth) {
      FilterChain.validateTremolo(dataOrDepth);
    }

    this.#tremolo = dataOrDepth ?? null;
    return this;
  }

  /**
   * Check whether the tremolo filter is enabled.
   */
  isTremoloEnabled(): boolean {
    if (!this.#tremolo) {
      return false;
    }

    const {
      frequency,
      depth,
    } = this.#tremolo;

    return (!!frequency && FilterChain.isSet(frequency, 1))
      || (!!depth && FilterChain.isSet(depth, .5));
  }

  /**
   * Returns the configured vibrato filter, or null.
   */
  getVibrato(): Vibrato | null {
    return this.#vibrato;
  }

  /**
   * Configure the tremolo filter.
   * @param depth
   * @param frequency
   */
  setVibrato(depth?: number, frequency?: number): FilterChain

  /**
   * Configures the vibrato filter.
   * @param data The vibrato filter data.
   */
  setVibrato(data?: Vibrato): FilterChain

  setVibrato(dataOrDepth?: Vibrato | number, frequency?: number): FilterChain {
    if (typeof dataOrDepth === "number") {
      const vibrato = {
        depth: dataOrDepth,
        frequency,
      };

      FilterChain.validateVibrato(vibrato);
      this.#vibrato = vibrato;

      return this;
    }

    if (dataOrDepth) {
      FilterChain.validateVibrato(dataOrDepth);
    }

    this.#vibrato = dataOrDepth ?? null;
    return this;
  }

  /**
   * Check whether the vibrato filter is enabled.
   */
  isVibratoEnabled(): boolean {
    if (!this.#vibrato) {
      return false;
    }

    const {
      frequency,
      depth,
    } = this.#vibrato;

    return (!!frequency && FilterChain.isSet(frequency, 1))
      || (!!depth && FilterChain.isSet(depth, .5));
  }

  /**
   * Applies this filter chain to the player.
   */
  apply(): Promise<Player> {
    return this.#player.setFilters(this.toJSON());
  }

  /**
   * Get the JSON representation for this filter chain.
   */
  toJSON(): FilterMap {
    const filterMap: FilterMap = {};
    if (this.#equalizer) {
      filterMap.equalizer = this.#equalizer;
    }

    if (this.#volume) {
      filterMap.volume = {
        volume: this.#volume,
      };
    }

    if (this.#karaoke) {
      filterMap.karaoke = this.#karaoke;
    }

    if (this.#timescale) {
      filterMap.timescale = this.#timescale;
    }

    if (this.#tremolo) {
      filterMap.tremolo = this.#tremolo;
    }

    if (this.#vibrato) {
      filterMap.vibrato = this.#vibrato;
    }

    return filterMap;
  }
}
