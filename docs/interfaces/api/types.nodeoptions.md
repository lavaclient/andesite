[andesitejs](../../README.md) / [Exports](../../modules.md) / [api/types](../../modules/api_types.md) / NodeOptions

# Interface: NodeOptions

[api/types](../../modules/api_types.md).NodeOptions

## Hierarchy

* **NodeOptions**

## Table of contents

### Properties

- [auth](types.nodeoptions.md#auth)
- [eventBuffer](types.nodeoptions.md#eventbuffer)
- [host](types.nodeoptions.md#host)
- [id](types.nodeoptions.md#id)
- [pingInterval](types.nodeoptions.md#pinginterval)
- [port](types.nodeoptions.md#port)
- [reconnection](types.nodeoptions.md#reconnection)
- [secure](types.nodeoptions.md#secure)

## Properties

### auth

• `Optional` **auth**: *undefined* \| *string*

The authorization used for connecting. You can omit this if you didn't set a password.

Defined in: [api/types.ts:720](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L720)

___

### eventBuffer

• `Optional` **eventBuffer**: *undefined* \| *number*

When a connection is closed, events will be buffered for up to the timeout specified.

Defined in: [api/types.ts:740](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L740)

___

### host

• **host**: *string*

The host name of the node.

Defined in: [api/types.ts:710](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L710)

___

### id

• `Optional` **id**: *undefined* \| *string* \| *number*

The identifier for this node..

Defined in: [api/types.ts:725](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L725)

___

### pingInterval

• `Optional` **pingInterval**: *undefined* \| *number*

How often to ping the andesite instance, in milliseconds. This can be omitted if you do not want to ping the node.

Defined in: [api/types.ts:735](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L735)

___

### port

• **port**: *string* \| *number*

The port that the node is on.

Defined in: [api/types.ts:715](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L715)

___

### reconnection

• `Optional` **reconnection**: *undefined* \| [*ReconnectionOptions*](types.reconnectionoptions.md)

The reconnection options for this node.

Defined in: [api/types.ts:745](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L745)

___

### secure

• `Optional` **secure**: *undefined* \| *boolean*

Whether to use https/wss.

Defined in: [api/types.ts:730](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L730)
