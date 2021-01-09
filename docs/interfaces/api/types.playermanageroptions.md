[andesitejs](../../README.md) / [Exports](../../modules.md) / [api/types](../../modules/api_types.md) / PlayerManagerOptions

# Interface: PlayerManagerOptions

[api/types](../../modules/api_types.md).PlayerManagerOptions

## Hierarchy

* **PlayerManagerOptions**

## Table of contents

### Properties

- [eventBuffer](types.playermanageroptions.md#eventbuffer)
- [nodes](types.playermanageroptions.md#nodes)
- [reconnectionDefaults](types.playermanageroptions.md#reconnectiondefaults)
- [send](types.playermanageroptions.md#send)
- [userId](types.playermanageroptions.md#userid)

## Properties

### eventBuffer

• `Optional` **eventBuffer**: *undefined* \| *number*

When a connection is closed, events will be buffered for up to the timeout specified.

Defined in: [api/types.ts:588](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L588)

___

### nodes

• `Optional` **nodes**: *undefined* \| [*NodeOptions*](types.nodeoptions.md)[]

The nodes to connect to.

Defined in: [api/types.ts:568](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L568)

___

### reconnectionDefaults

• `Optional` **reconnectionDefaults**: *undefined* \| [*ReconnectionOptions*](types.reconnectionoptions.md)

Default reconnection options.

Defined in: [api/types.ts:583](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L583)

___

### send

• **send**: [*SendMethod*](../../modules/api_types.md#sendmethod)

A method used for sending voice updates to Discord.

Defined in: [api/types.ts:573](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L573)

___

### userId

• `Optional` **userId**: *undefined* \| *string*

The user id for the client.

Defined in: [api/types.ts:578](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L578)
