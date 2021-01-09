[andesitejs](../../README.md) / [Exports](../../modules.md) / [api/types](../../modules/api_types.md) / MixerPlayer

# Interface: MixerPlayer

[api/types](../../modules/api_types.md).MixerPlayer

## Hierarchy

* **MixerPlayer**

## Table of contents

### Properties

- [filters](types.mixerplayer.md#filters)
- [paused](types.mixerplayer.md#paused)
- [position](types.mixerplayer.md#position)
- [time](types.mixerplayer.md#time)
- [volume](types.mixerplayer.md#volume)

## Properties

### filters

• **filters**: [*FilterMap*](types.filtermap.md)

Map of filter name -> filter settings for each filter present

Defined in: [api/types.ts:536](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L536)

___

### paused

• **paused**: *boolean*

Whether or not the player is paused

Defined in: [api/types.ts:526](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L526)

___

### position

• `Optional` **position**: *undefined* \| *number*

Position of the current playing track, or null if nothing is playing

Defined in: [api/types.ts:521](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L521)

___

### time

• **time**: *string*

Current unix timestamp on the node.

Defined in: [api/types.ts:516](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L516)

___

### volume

• **volume**: *number*

The volume of the player.

Defined in: [api/types.ts:531](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L531)
