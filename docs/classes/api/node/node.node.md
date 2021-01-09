[andesitejs](../../../README.md) / [Exports](../../../modules.md) / [api/node/Node](../../../modules/api_node_node.md) / Node

# Class: Node

[api/node/Node](../../../modules/api_node_node.md).Node

## Hierarchy

* **Node**

## Table of contents

### Constructors

- [constructor](node.node.md#constructor)

### Properties

- [#auth](node.node.md##auth)
- [#host](node.node.md##host)
- [#manager](node.node.md##manager)
- [#players](node.node.md##players)
- [#queue](node.node.md##queue)
- [#reconnectTimeout](node.node.md##reconnecttimeout)
- [#rest](node.node.md##rest)
- [#status](node.node.md##status)
- [#ws](node.node.md##ws)
- [connectionId](node.node.md#connectionid)
- [currentReconnect](node.node.md#currentreconnect)
- [eventBuffer](node.node.md#eventbuffer)
- [id](node.node.md#id)
- [meta](node.node.md#meta)
- [port](node.node.md#port)
- [reconnection](node.node.md#reconnection)
- [secure](node.node.md#secure)
- [stats](node.node.md#stats)

### Accessors

- [auth](node.node.md#auth)
- [connected](node.node.md#connected)
- [host](node.node.md#host)
- [manager](node.node.md#manager)
- [penalties](node.node.md#penalties)
- [players](node.node.md#players)
- [rest](node.node.md#rest)
- [status](node.node.md#status)

### Methods

- [cleanUp](node.node.md#cleanup)
- [close](node.node.md#close)
- [configureEventBuffer](node.node.md#configureeventbuffer)
- [connect](node.node.md#connect)
- [createPlayer](node.node.md#createplayer)
- [debug](node.node.md#debug)
- [destroyPlayer](node.node.md#destroyplayer)
- [handleClose](node.node.md#handleclose)
- [handleError](node.node.md#handleerror)
- [handleMessage](node.node.md#handlemessage)
- [handleOpen](node.node.md#handleopen)
- [processQueue](node.node.md#processqueue)
- [queueReconnect](node.node.md#queuereconnect)
- [reconnect](node.node.md#reconnect)
- [send](node.node.md#send)
- [sendWs](node.node.md#sendws)

## Constructors

### constructor

\+ **new Node**(`manager`: [*PlayerManager*](../playermanager.playermanager.md), `options`: *Required*<[*NodeOptions*](../../../interfaces/api/types.nodeoptions.md)\>): [*Node*](node.node.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`manager` | [*PlayerManager*](../playermanager.playermanager.md) | The manager instance.   |
`options` | *Required*<[*NodeOptions*](../../../interfaces/api/types.nodeoptions.md)\> | The options for this node.    |

**Returns:** [*Node*](node.node.md)

Defined in: [api/node/Node.ts:128](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L128)

## Properties

### #auth

• `Private` `Optional` `Readonly` **#auth**: *undefined* \| *string*

The password for the andesite instance.

Defined in: [api/node/Node.ts:116](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L116)

___

### #host

• `Private` `Readonly` **#host**: *string*

The host of the andesite instance.

Defined in: [api/node/Node.ts:110](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L110)

___

### #manager

• `Private` `Readonly` **#manager**: [*PlayerManager*](../playermanager.playermanager.md)

The manager instance.

Defined in: [api/node/Node.ts:128](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L128)

___

### #players

• `Private` `Readonly` **#players**: *Map*<*string*, [*Player*](../player/player.player.md)\>

The active players for this node.

Defined in: [api/node/Node.ts:122](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L122)

___

### #queue

• `Private` `Readonly` **#queue**: *unknown*[]

Queue for outgoing messages.

Defined in: [api/node/Node.ts:104](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L104)

___

### #reconnectTimeout

• `Private` **#reconnectTimeout**: *null* \| *Timeout*= null

The timeout for reconnecting.

Defined in: [api/node/Node.ts:81](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L81)

___

### #rest

• `Private` **#rest**: *null* \| [*REST*](rest.rest.md)= null

The rest manager.

Defined in: [api/node/Node.ts:98](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L98)

___

### #status

• `Private` **#status**: [*NodeStatus*](../../../enums/api/node/node.nodestatus.md)

The current status of this node.

Defined in: [api/node/Node.ts:92](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L92)

___

### #ws

• `Optional` `Private` **#ws**: *undefined* \| *WebSocket*

The websocket instance.

Defined in: [api/node/Node.ts:86](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L86)

___

### connectionId

• `Optional` **connectionId**: *undefined* \| *number*

The resume id for this node.

Defined in: [api/node/Node.ts:60](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L60)

___

### currentReconnect

• **currentReconnect**: *number*= 0

The current reconnection try this node is on, or 0 if this player hasn't closed.

Defined in: [api/node/Node.ts:55](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L55)

___

### eventBuffer

• `Optional` **eventBuffer**: *undefined* \| *number*

When a connection is closed, events will be buffered for up to the timeout specified here.

Defined in: [api/node/Node.ts:65](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L65)

___

### id

• `Readonly` **id**: *string* \| *number*

The identifier for this node.

Defined in: [api/node/Node.ts:35](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L35)

___

### meta

• `Optional` **meta**: *undefined* \| [*NodeMetadata*](../../../interfaces/api/types.nodemetadata.md)

The metadata of the andesite-instance.

Defined in: [api/node/Node.ts:70](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L70)

___

### port

• `Optional` `Readonly` **port**: *undefined* \| *number*

The configured port of the andesite instance.

Defined in: [api/node/Node.ts:45](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L45)

___

### reconnection

• `Readonly` **reconnection**: *Required*<[*ReconnectionOptions*](../../../interfaces/api/types.reconnectionoptions.md)\>

The reconnection options for this node.

Defined in: [api/node/Node.ts:50](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L50)

___

### secure

• `Readonly` **secure**: *boolean*

Whether to use wss/https

Defined in: [api/node/Node.ts:40](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L40)

___

### stats

• `Optional` **stats**: *undefined* \| [*NodeStats*](../../../interfaces/api/types.nodestats.md)

The stats of the andesite-instance.

Defined in: [api/node/Node.ts:75](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L75)

## Accessors

### auth

• **auth**(): *undefined* \| *string*

The authorization for this andesite instance.

**Returns:** *undefined* \| *string*

Defined in: [api/node/Node.ts:177](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L177)

___

### connected

• **connected**(): *boolean*

Whether the websocket is open / connected.

**Returns:** *boolean*

Defined in: [api/node/Node.ts:217](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L217)

___

### host

• **host**(): *string*

The host of this andesite instance.

**Returns:** *string*

Defined in: [api/node/Node.ts:170](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L170)

___

### manager

• **manager**(): [*PlayerManager*](../playermanager.playermanager.md)

The manager instance.

**Returns:** [*PlayerManager*](../playermanager.playermanager.md)

Defined in: [api/node/Node.ts:191](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L191)

___

### penalties

• **penalties**(): *number*

Penalties of this node. The higher the return number, the larger load the andesite instance is handling.

**Returns:** *number*

Defined in: [api/node/Node.ts:199](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L199)

___

### players

• **players**(): *Map*<*string*, [*Player*](../player/player.player.md)\>

The active players for this node.

**Returns:** *Map*<*string*, [*Player*](../player/player.player.md)\>

Defined in: [api/node/Node.ts:163](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L163)

___

### rest

• **rest**(): [*REST*](rest.rest.md)

The rest manager for this node.

**Returns:** [*REST*](rest.rest.md)

Defined in: [api/node/Node.ts:152](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L152)

___

### status

• **status**(): [*NodeStatus*](../../../enums/api/node/node.nodestatus.md)

The current status of this node.

**Returns:** [*NodeStatus*](../../../enums/api/node/node.nodestatus.md)

Defined in: [api/node/Node.ts:184](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L184)

## Methods

### cleanUp

▸ `Private`**cleanUp**(): *void*

Cleans up the websocket listeners.

**`since`** 1.0.0

**Returns:** *void*

Defined in: [api/node/Node.ts:392](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L392)

___

### close

▸ **close**(`reason?`: *string*): *Promise*<*void*\>

Closes the websocket connection.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`reason` | *string* | "destroy" |

**Returns:** *Promise*<*void*\>

Defined in: [api/node/Node.ts:283](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L283)

___

### configureEventBuffer

▸ **configureEventBuffer**(`timeout`: *number*): *Promise*<*number*\>

Configure the event buffer for this session.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`timeout` | *number* | Timeout for event buffering, in milliseconds    |

**Returns:** *Promise*<*number*\>

Defined in: [api/node/Node.ts:270](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L270)

___

### connect

▸ **connect**(`userId`: *string*): *Promise*<[*Node*](node.node.md)\>

Connect this node to the andesite instance.

#### Parameters:

Name | Type |
------ | ------ |
`userId` | *string* |

**Returns:** *Promise*<[*Node*](node.node.md)\>

Defined in: [api/node/Node.ts:296](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L296)

___

### createPlayer

▸ **createPlayer**(`guildId`: *string*, `transport?`: [*PlayerTransport*](../../../modules/api_types.md#playertransport)): [*Player*](../player/player.player.md)

Creates a new player with the provided guildId and transport.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`guildId` | *string* | - | The guild id.   |
`transport` | [*PlayerTransport*](../../../modules/api_types.md#playertransport) | "websocket" | The transport to use.    |

**Returns:** [*Player*](../player/player.player.md)

Defined in: [api/node/Node.ts:227](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L227)

___

### debug

▸ `Private`**debug**(`message`: *string*): *void*

Emits a debug message.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`message` | *string* | The debug message.   |

**Returns:** *void*

Defined in: [api/node/Node.ts:358](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L358)

___

### destroyPlayer

▸ **destroyPlayer**(`guildId`: *string*): *Promise*<*boolean*\>

Destroys a player that is assigned the provided guild id.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`guildId` | *string* | Guild ID of the player to destroy.    |

**Returns:** *Promise*<*boolean*\>

Defined in: [api/node/Node.ts:245](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L245)

___

### handleClose

▸ `Private`**handleClose**(`event`: CloseEvent): *Promise*<*undefined* \| *Timeout*\>

Handles the "close" websocket event.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | CloseEvent | The event data.    |

**Returns:** *Promise*<*undefined* \| *Timeout*\>

Defined in: [api/node/Node.ts:490](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L490)

___

### handleError

▸ `Private`**handleError**(`event`: ErrorEvent): *Promise*<*void*\>

Handles the "error" websocket event.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | ErrorEvent | The event data.    |

**Returns:** *Promise*<*void*\>

Defined in: [api/node/Node.ts:505](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L505)

___

### handleMessage

▸ `Private`**handleMessage**(`__namedParameters`: MessageEvent): *Promise*<*void*\>

Handles the "message" websocket event.

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | MessageEvent |

**Returns:** *Promise*<*void*\>

Defined in: [api/node/Node.ts:440](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L440)

___

### handleOpen

▸ `Private`**handleOpen**(): *Promise*<*void*\>

Handles the "open" websocket event.

**Returns:** *Promise*<*void*\>

Defined in: [api/node/Node.ts:418](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L418)

___

### processQueue

▸ `Private`**processQueue**(): *Promise*<*void*\>

Processes all of the queued payloads.

**Returns:** *Promise*<*void*\>

Defined in: [api/node/Node.ts:368](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L368)

___

### queueReconnect

▸ `Protected`**queueReconnect**(): *Timeout*

queues a reconnect.

**Returns:** *Timeout*

Defined in: [api/node/Node.ts:405](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L405)

___

### reconnect

▸ **reconnect**(): *Promise*<*void*\>

Reconnects to the andesite instance.

**Returns:** *Promise*<*void*\>

Defined in: [api/node/Node.ts:333](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L333)

___

### send

▸ `Private`**send**(`payload`: *unknown*): *Promise*<*void*\>

Sends a payload to the andesite instance.

#### Parameters:

Name | Type |
------ | ------ |
`payload` | *unknown* |

**Returns:** *Promise*<*void*\>

Defined in: [api/node/Node.ts:516](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L516)

___

### sendWs

▸ **sendWs**(`data`: { `op`: *string*  } & *Record*<*string*, *any*\>, `prioritize?`: *boolean*): *Promise*<*void*\>

Send a packet to the andesite instance.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`data` | { `op`: *string*  } & *Record*<*string*, *any*\> | - | The packet data   |
`prioritize` | *boolean* | false | Whether to prioritize this packet.    |

**Returns:** *Promise*<*void*\>

Defined in: [api/node/Node.ts:260](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/Node.ts#L260)
