[andesitejs](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / FilterChain

# Class: FilterChain

[index](../modules/index.md).FilterChain

## Hierarchy

* **FilterChain**

## Table of contents

### Constructors

- [constructor](index.filterchain.md#constructor)

### Properties

- [#equalizer](index.filterchain.md##equalizer)
- [#karaoke](index.filterchain.md##karaoke)
- [#player](index.filterchain.md##player)
- [#timescale](index.filterchain.md##timescale)
- [#tremolo](index.filterchain.md##tremolo)
- [#vibrato](index.filterchain.md##vibrato)
- [#volume](index.filterchain.md##volume)

### Methods

- [apply](index.filterchain.md#apply)
- [getEqualizer](index.filterchain.md#getequalizer)
- [getKaraoke](index.filterchain.md#getkaraoke)
- [getTimescale](index.filterchain.md#gettimescale)
- [getTremolo](index.filterchain.md#gettremolo)
- [getVibrato](index.filterchain.md#getvibrato)
- [getVolume](index.filterchain.md#getvolume)
- [isEqualizerEnabled](index.filterchain.md#isequalizerenabled)
- [isTimescaleEnabled](index.filterchain.md#istimescaleenabled)
- [isTremoloEnabled](index.filterchain.md#istremoloenabled)
- [isVibratoEnabled](index.filterchain.md#isvibratoenabled)
- [setEqualizer](index.filterchain.md#setequalizer)
- [setKaraoke](index.filterchain.md#setkaraoke)
- [setTimescale](index.filterchain.md#settimescale)
- [setTremolo](index.filterchain.md#settremolo)
- [setVibrato](index.filterchain.md#setvibrato)
- [setVolume](index.filterchain.md#setvolume)
- [toJSON](index.filterchain.md#tojson)
- [isSet](index.filterchain.md#isset)
- [validateTimescale](index.filterchain.md#validatetimescale)
- [validateTremolo](index.filterchain.md#validatetremolo)
- [validateVibrato](index.filterchain.md#validatevibrato)
- [validateVolume](index.filterchain.md#validatevolume)

## Constructors

### constructor

\+ **new FilterChain**(`player`: [*Player*](api/player/player.player.md), `base?`: [*FilterMap*](../interfaces/api/types.filtermap.md)): [*FilterChain*](api/player/filterchain.filterchain.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`player` | [*Player*](api/player/player.player.md) | The player instance.   |
`base?` | [*FilterMap*](../interfaces/api/types.filtermap.md) |     |

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/FilterChain.ts:45](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L45)

## Properties

### #equalizer

• `Private` **#equalizer**: *null* \| [*Equalizer*](../interfaces/api/types.equalizer.md)

The equalizer filter.

Defined in: [api/player/FilterChain.ts:9](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L9)

___

### #karaoke

• `Private` **#karaoke**: *null* \| [*Karaoke*](../interfaces/api/types.karaoke.md)

The karaoke filter.

Defined in: [api/player/FilterChain.ts:27](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L27)

___

### #player

• `Private` `Readonly` **#player**: [*Player*](api/player/player.player.md)

The player instance.

Defined in: [api/player/FilterChain.ts:45](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L45)

___

### #timescale

• `Private` **#timescale**: *null* \| [*Timescale*](../interfaces/api/types.timescale.md)

The timescale filter.

Defined in: [api/player/FilterChain.ts:15](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L15)

___

### #tremolo

• `Private` **#tremolo**: *null* \| [*Tremolo*](../interfaces/api/types.tremolo.md)

The tremolo filter.

Defined in: [api/player/FilterChain.ts:21](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L21)

___

### #vibrato

• `Private` **#vibrato**: *null* \| [*Vibrato*](../interfaces/api/types.vibrato.md)

The vibrato filter.

Defined in: [api/player/FilterChain.ts:39](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L39)

___

### #volume

• `Private` **#volume**: *null* \| *number*

The volume filter.

Defined in: [api/player/FilterChain.ts:33](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L33)

## Methods

### apply

▸ **apply**(): *Promise*<[*Player*](api/player/player.player.md)\>

Applies this filter chain to the player.

**Returns:** *Promise*<[*Player*](api/player/player.player.md)\>

Defined in: [api/player/FilterChain.ts:434](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L434)

___

### getEqualizer

▸ **getEqualizer**(): *null* \| [*Equalizer*](../interfaces/api/types.equalizer.md)

The configured equalizer filter.

**Returns:** *null* \| [*Equalizer*](../interfaces/api/types.equalizer.md)

Defined in: [api/player/FilterChain.ts:131](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L131)

___

### getKaraoke

▸ **getKaraoke**(): *null* \| [*Karaoke*](../interfaces/api/types.karaoke.md)

The current karaoke configuration.

**Returns:** *null* \| [*Karaoke*](../interfaces/api/types.karaoke.md)

Defined in: [api/player/FilterChain.ts:224](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L224)

___

### getTimescale

▸ **getTimescale**(): *null* \| [*Timescale*](../interfaces/api/types.timescale.md)

The current timescale configuration.

**Returns:** *null* \| [*Timescale*](../interfaces/api/types.timescale.md)

Defined in: [api/player/FilterChain.ts:260](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L260)

___

### getTremolo

▸ **getTremolo**(): *null* \| [*Tremolo*](../interfaces/api/types.tremolo.md)

The current karaoke configuration.

**Returns:** *null* \| [*Tremolo*](../interfaces/api/types.tremolo.md)

Defined in: [api/player/FilterChain.ts:318](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L318)

___

### getVibrato

▸ **getVibrato**(): *null* \| [*Vibrato*](../interfaces/api/types.vibrato.md)

Returns the configured vibrato filter, or null.

**Returns:** *null* \| [*Vibrato*](../interfaces/api/types.vibrato.md)

Defined in: [api/player/FilterChain.ts:376](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L376)

___

### getVolume

▸ **getVolume**(`toPercentage?`: *boolean*): *number*

Get the current volume of the player.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`toPercentage` | *boolean* | false | Whether to convert the current volume to a percentage (0-100 instead of 0-1)    |

**Returns:** *number*

Defined in: [api/player/FilterChain.ts:197](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L197)

___

### isEqualizerEnabled

▸ **isEqualizerEnabled**(): Boolean

Returns whether the equalizer filter is enabled.

**Returns:** Boolean

Defined in: [api/player/FilterChain.ts:189](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L189)

___

### isTimescaleEnabled

▸ **isTimescaleEnabled**(): *boolean*

Check whether the timescale filter is enabled.

**Returns:** *boolean*

Defined in: [api/player/FilterChain.ts:301](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L301)

___

### isTremoloEnabled

▸ **isTremoloEnabled**(): *boolean*

Check whether the tremolo filter is enabled.

**Returns:** *boolean*

Defined in: [api/player/FilterChain.ts:359](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L359)

___

### isVibratoEnabled

▸ **isVibratoEnabled**(): *boolean*

Check whether the vibrato filter is enabled.

**Returns:** *boolean*

Defined in: [api/player/FilterChain.ts:417](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L417)

___

### setEqualizer

▸ **setEqualizer**(...`bands`: *number*[]): [*FilterChain*](api/player/filterchain.filterchain.md)

Configures the equalizer filter.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...bands` | *number*[] | The gain values for each band.    |

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/FilterChain.ts:139](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L139)

▸ **setEqualizer**(...`bands`: [*Band*](../interfaces/api/types.band.md)[]): [*FilterChain*](api/player/filterchain.filterchain.md)

Set the equalizer bands.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...bands` | [*Band*](../interfaces/api/types.band.md)[] | The bands to supply.    |

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/FilterChain.ts:145](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L145)

___

### setKaraoke

▸ **setKaraoke**(`level?`: *number*, `monoLevel?`: *number*, `filterBand?`: *number*): [*FilterChain*](api/player/filterchain.filterchain.md)

Configure the karaoke filter.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`level?` | *number* |  |
`monoLevel?` | *number* |  |
`filterBand?` | *number* |     |

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/FilterChain.ts:234](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L234)

▸ **setKaraoke**(`data?`: [*Karaoke*](../interfaces/api/types.karaoke.md)): [*FilterChain*](api/player/filterchain.filterchain.md)

Configure the karaoke filter.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data?` | [*Karaoke*](../interfaces/api/types.karaoke.md) | The karaoke filter data.    |

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/FilterChain.ts:240](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L240)

___

### setTimescale

▸ **setTimescale**(`speed?`: *number*, `pitch?`: *number*, `rate?`: *number*): [*FilterChain*](api/player/filterchain.filterchain.md)

Configure the timescale filter.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`speed?` | *number* | The track speed.   |
`pitch?` | *number* | The track pitch   |
`rate?` | *number* | The track rate    |

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/FilterChain.ts:270](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L270)

▸ **setTimescale**(`data?`: [*Timescale*](../interfaces/api/types.timescale.md)): [*FilterChain*](api/player/filterchain.filterchain.md)

Configure the timescale filter.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data?` | [*Timescale*](../interfaces/api/types.timescale.md) | The timescale filter data.    |

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/FilterChain.ts:276](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L276)

___

### setTremolo

▸ **setTremolo**(`depth?`: *number*, `frequency?`: *number*): [*FilterChain*](api/player/filterchain.filterchain.md)

Configure the tremolo filter.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`depth?` | *number* |  |
`frequency?` | *number* |     |

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/FilterChain.ts:327](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L327)

▸ **setTremolo**(`data?`: [*Tremolo*](../interfaces/api/types.tremolo.md)): [*FilterChain*](api/player/filterchain.filterchain.md)

Configure the tremolo filter.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data?` | [*Tremolo*](../interfaces/api/types.tremolo.md) | The tremolo filter data.    |

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/FilterChain.ts:333](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L333)

___

### setVibrato

▸ **setVibrato**(`depth?`: *number*, `frequency?`: *number*): [*FilterChain*](api/player/filterchain.filterchain.md)

Configure the tremolo filter.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`depth?` | *number* |  |
`frequency?` | *number* |     |

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/FilterChain.ts:385](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L385)

▸ **setVibrato**(`data?`: [*Vibrato*](../interfaces/api/types.vibrato.md)): [*FilterChain*](api/player/filterchain.filterchain.md)

Configures the vibrato filter.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data?` | [*Vibrato*](../interfaces/api/types.vibrato.md) | The vibrato filter data.    |

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/FilterChain.ts:391](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L391)

___

### setVolume

▸ **setVolume**(`volume`: *null* \| *number*): [*FilterChain*](api/player/filterchain.filterchain.md)

Configure the volume for this player.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`volume` | *null* \| *number* | The volume amount (must be 0-5) or null to reset the volume.    |

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/FilterChain.ts:209](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L209)

___

### toJSON

▸ **toJSON**(): [*FilterMap*](../interfaces/api/types.filtermap.md)

Get the JSON representation for this filter chain.

**Returns:** [*FilterMap*](../interfaces/api/types.filtermap.md)

Defined in: [api/player/FilterChain.ts:441](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L441)

___

### isSet

▸ `Static`**isSet**(`val`: *number*, `def`: *number*): *boolean*

Returns true if the difference between a given value and the default.
is greater or equal to 0.01;.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`val` | *number* | Value to check.   |
`def` | *number* | Default value.    |

**Returns:** *boolean*

Defined in: [api/player/FilterChain.ts:124](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L124)

___

### validateTimescale

▸ `Static`**validateTimescale**(`timescale`: [*Timescale*](../interfaces/api/types.timescale.md)): *void*

Runs several checks on a timescale filter.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`timescale` | [*Timescale*](../interfaces/api/types.timescale.md) |     |

**Returns:** *void*

Defined in: [api/player/FilterChain.ts:65](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L65)

___

### validateTremolo

▸ `Static`**validateTremolo**(`tremolo`: [*Tremolo*](../interfaces/api/types.tremolo.md)): *void*

Runs several checks on a tremolo filter.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tremolo` | [*Tremolo*](../interfaces/api/types.tremolo.md) |     |

**Returns:** *void*

Defined in: [api/player/FilterChain.ts:83](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L83)

___

### validateVibrato

▸ `Static`**validateVibrato**(`vibrato`: [*Vibrato*](../interfaces/api/types.vibrato.md)): *void*

Runs several checks on a vibrato filter.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`vibrato` | [*Vibrato*](../interfaces/api/types.vibrato.md) |     |

**Returns:** *void*

Defined in: [api/player/FilterChain.ts:97](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L97)

___

### validateVolume

▸ `Static`**validateVolume**(`__namedParameters`: [*Volume*](../interfaces/api/types.volume.md)): *void*

Runs a check on a volume filter.

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | [*Volume*](../interfaces/api/types.volume.md) |

**Returns:** *void*

Defined in: [api/player/FilterChain.ts:111](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/FilterChain.ts#L111)
