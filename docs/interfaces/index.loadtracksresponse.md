[andesitejs](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / LoadTracksResponse

# Interface: LoadTracksResponse

[index](../modules/index.md).LoadTracksResponse

## Hierarchy

* **LoadTracksResponse**

## Table of contents

### Properties

- [cause](index.loadtracksresponse.md#cause)
- [loadType](index.loadtracksresponse.md#loadtype)
- [playlistInfo](index.loadtracksresponse.md#playlistinfo)
- [severity](index.loadtracksresponse.md#severity)
- [tracks](index.loadtracksresponse.md#tracks)

## Properties

### cause

• **cause**: *null* \| [*Exception*](api/types.exception.md)

Error that occurred while loading tracks.

Defined in: [api/types.ts:359](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L359)

___

### loadType

• **loadType**: [*LoadTypes*](../modules/api_types.md#loadtypes)

Type* of the response

Defined in: [api/types.ts:344](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L344)

___

### playlistInfo

• **playlistInfo**: *null* \| [*PlaylistInfo*](api/types.playlistinfo.md)

Metadata of the loaded playlist.

Defined in: [api/types.ts:354](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L354)

___

### severity

• **severity**: *null* \| *string*

Severity of the error.

Defined in: [api/types.ts:364](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L364)

___

### tracks

• **tracks**: *null* \| [*TrackInfo*](api/types.trackinfo.md)[]

Loaded tracks.

Defined in: [api/types.ts:349](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L349)
