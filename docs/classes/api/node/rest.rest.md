[andesitejs](../../../README.md) / [Exports](../../../modules.md) / [api/node/REST](../../../modules/api_node_rest.md) / REST

# Class: REST

[api/node/REST](../../../modules/api_node_rest.md).REST

## Hierarchy

* *EventEmitter*

  ↳ **REST**

## Table of contents

### Constructors

- [constructor](rest.rest.md#constructor)

### Properties

- [node](rest.rest.md#node)
- [requests](rest.rest.md#requests)

### Accessors

- [baseUrl](rest.rest.md#baseurl)

### Methods

- [decodeTracks](rest.rest.md#decodetracks)
- [emit](rest.rest.md#emit)
- [getStats](rest.rest.md#getstats)
- [loadTracks](rest.rest.md#loadtracks)
- [make](rest.rest.md#make)

## Constructors

### constructor

\+ **new REST**(`node`: [*Node*](node.node.md)): [*REST*](rest.rest.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`node` | [*Node*](node.node.md) | The node this rest manager belongs to.    |

**Returns:** [*REST*](rest.rest.md)

Defined in: [api/node/REST.ts:16](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/REST.ts#L16)

## Properties

### node

• `Readonly` **node**: [*Node*](node.node.md)

The node instance.

Defined in: [api/node/REST.ts:11](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/REST.ts#L11)

___

### requests

• **requests**: { `failed`: *number* ; `successful`: *number*  }

Request analytics.

#### Type declaration:

Name | Type |
------ | ------ |
`failed` | *number* |
`successful` | *number* |

Defined in: [api/node/REST.ts:16](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/REST.ts#L16)

## Accessors

### baseUrl

• **baseUrl**(): *string*

The base url for all requests.

**Returns:** *string*

Defined in: [api/node/REST.ts:34](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/REST.ts#L34)

## Methods

### decodeTracks

▸ **decodeTracks**(`track`: *string*): *Promise*<[*TrackInfo*](../../../interfaces/api/types.trackinfo.md)\>

Returns metadata for the provided track.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`track` | *string* | The track to decode.    |

**Returns:** *Promise*<[*TrackInfo*](../../../interfaces/api/types.trackinfo.md)\>

Defined in: [api/node/REST.ts:58](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/REST.ts#L58)

▸ **decodeTracks**(`track`: *string*[]): *Promise*<[*TrackInfo*](../../../interfaces/api/types.trackinfo.md)[]\>

Returns metadata for the provided tracks.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`track` | *string*[] | The tracks to decode.    |

**Returns:** *Promise*<[*TrackInfo*](../../../interfaces/api/types.trackinfo.md)[]\>

Defined in: [api/node/REST.ts:65](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/REST.ts#L65)

___

### emit

▸ **emit**(`event`: *string*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | *string* |  |
`...args` | *any*[] |     |

**Returns:** *boolean*

Defined in: [api/node/REST.ts:81](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/REST.ts#L81)

___

### getStats

▸ **getStats**(): *Promise*<[*NodeStats*](../../../interfaces/api/types.nodestats.md)\>

Returns stats about the andesite instance.

**Returns:** *Promise*<[*NodeStats*](../../../interfaces/api/types.nodestats.md)\>

Defined in: [api/node/REST.ts:41](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/REST.ts#L41)

___

### loadTracks

▸ **loadTracks**(`identifier`: *string*): *Promise*<[*LoadTracksResponse*](../../../interfaces/api/types.loadtracksresponse.md)\>

Loads tracks with the provided identifier..

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`identifier` | *string* | The search identifier.    |

**Returns:** *Promise*<[*LoadTracksResponse*](../../../interfaces/api/types.loadtracksresponse.md)\>

Defined in: [api/node/REST.ts:49](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/REST.ts#L49)

___

### make

▸ **make**<T\>(`endpoint`: *string*, `options?`: [*RequestOptions*](../../../modules/api_node_rest.md#requestoptions)): *Promise*<T\>

Makes a request to the andesite instance.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`endpoint` | *string* | - | The endpoint to make a request to.   |
`options` | [*RequestOptions*](../../../modules/api_node_rest.md#requestoptions) | ... | Additional request options    |

**Returns:** *Promise*<T\>

Defined in: [api/node/REST.ts:95](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/REST.ts#L95)
