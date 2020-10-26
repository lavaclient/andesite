import type { Player } from "./Player.ts";
import type { Band, Equalizer, FilterMap, Karaoke, Timescale, Tremolo } from "./i.ts";

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
	 * The player instance.
	 * @private
	 */
	readonly #player: Player

	/**
	 * @param player The player instance.
	 */
	public constructor(player: Player) {
		this.#player = player;
		this.#volume = 1.0;
		this.#equalizer = null;
		this.#timescale = null;
		this.#tremolo = null;
		this.#karaoke= null;
	}

	/**
	 * Configures the equalizer filter.
	 * @param bands The gain values for each band.
	 */
	public setEqualizer(...bands: number[]): FilterChain

	/**
	 * Set the equalizer bands.
	 * @param bands The bands to supply.
	 */
	public setEqualizer(...bands: Band[]): FilterChain
	public setEqualizer(...bands: (Band | number)[]): FilterChain {
		if (!bands.length) {
			this.#equalizer = null;
			return this;
		}

		if (typeof bands[0] === "number") {
			const result: Band[] = []

			let band = 0;
			for (const gain of bands) {
				if (typeof gain !== "number") {
					throw new Error(`Array Element ${band} is not a number, make sure each element is a number.`);
				}

				result.push({
					band: band++,
					gain
				});
			}

			this.#equalizer = {
				bands: result
			};

			return this;
		}

		if (bands.some(b => typeof b === "number")) {
			throw new Error("FilterChain#setEqualizer: One element is an element, make sure each element is an object.");
		}

		this.#equalizer = {
			bands: bands as Band[]
		}

		return this;
	}

	/**
	 * Returns whether the equalizer filter is enabled.
	 */
	public isEqualizerEnabled(): Boolean {
		return this.#equalizer !== null && this.#equalizer.bands.some(b => b.gain !== 0.0)
	}

	/**
	 * Configure the volume for this player.
	 * @param volume The volume amount (must be 0-1) or null to reset the volume.
	 */
	public setVolume(volume: number | null): FilterChain {
		if (volume === null) {
			this.#volume = 1.0;
			return this;
		}

		if (!(volume >= 0 || volume <= 1.0)) {
			throw new RangeError("FilterChain#setVolume: volume must be between 0.0 and 1.0");
		}

		this.#volume = volume
		return this;
	}

	/**
	 * Get the current volume of the player.
	 * @param toPercentage Whether to convert the current volume to a percentage (0-100 instead of 0-1)
	 */
	public getVolume(toPercentage: boolean = false): number {
		if (this.#volume === null) {
			return toPercentage ? 100 : 1.0
		}

		return toPercentage ? Math.floor(this.#volume * 100) : this.#volume
	}

	/**
	 * Configure the karaoke filter.
	 * @param level
	 * @param monoLevel
	 * @param filterBand
	 */
	public setKaraoke(level?: number, monoLevel?: number, filterBand?: number): FilterChain

	/**
	 * Configure the karaoke filter.
	 * @param data The karaoke filter data.
	 */
	public setKaraoke(data?: Karaoke): FilterChain

	public setKaraoke(dataOrLevel?: Karaoke | number, monoLevel?: number, filterBand?: number): FilterChain {
		if (typeof dataOrLevel === "number") {
			this.#karaoke = {
				level: dataOrLevel,
				monoLevel,
				filterBand
			}

			return this
		}

		this.#karaoke = dataOrLevel ?? null
		return this
	}

	/**
	 * The current karaoke configuration.
	 */
	public getKaraoke(): Karaoke | null {
		return this.#karaoke;
	}

	/**
	 * Configure the timescale filter.
	 * @param speed The track speed.
	 * @param pitch The track pitch
	 * @param rate The track rate
	 */
	public setTimescale(speed?: number, pitch?: number, rate?: number): FilterChain

	/**
	 * Configure the timescale filter.
	 * @param data The timescale filter data.
	 */
	public setTimescale(data?: Timescale): FilterChain

	public setTimescale(dataOrSpeed?: Timescale | number, pitch?: number, rate?: number): FilterChain {
		if (typeof dataOrSpeed === "number") {
			this.#timescale = {
				speed: dataOrSpeed,
				pitch: pitch ?? 1.0,
				rate: rate ?? 1.0
			}

			return this
		}

		this.#timescale = dataOrSpeed ?? null
		return this
	}

	/**
	 * The current timescale configuration.
	 */
	public getTimescale(): Timescale | null {
		return this.#timescale
	}

	/**
	 * Check whether the timescale filter is enabled.
	 */
	public isTimescaleEnabled(): boolean {
		if (this.#timescale === null) return false;
		const { rate, speed, pitch } = this.#timescale;
		return [rate, speed, pitch].some(value => value !== 1.0);
	}

	/**
	 * Configure the tremolo filter.
	 * @param depth
	 * @param frequency
	 */
	public setTremolo(depth?: number, frequency?: number): FilterChain

	/**
	 * Configure the tremolo filter.
	 * @param data The tremolo filter data.
	 */
	public setTremolo(data?: Tremolo): FilterChain

	public setTremolo(dataOrDepth?: Tremolo | number, frequency?: number): FilterChain {
		if (typeof dataOrDepth === "number") {
			this.#tremolo = {
				depth: dataOrDepth,
				frequency
			}

			return this
		}

		this.#tremolo = dataOrDepth ?? null
		return this
	}

	/**
	 * The current karaoke configuration.
	 */
	public getTremolo(): Tremolo | null {
		return this.#tremolo
	}

	/**
	 * Check whether the tremolo filter is enabled.
	 */
	public isTremoloEnabled(): boolean {
		return this.#tremolo !== null && this.#tremolo.depth !== 0.0;
	}

	/**
	 * Get the JSON representation for this filter chain.
	 */
	public asJSON(): FilterMap {
		return {
			equalizer: this.#equalizer,
			volume: this.#volume ? { volume: this.#volume } : null,
			karaoke: this.getKaraoke(),
			timescale: this.#timescale,
			tremolo: this.getTremolo(),
			vibrato: null
		};
	}
}
