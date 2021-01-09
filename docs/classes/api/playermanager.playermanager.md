[andesitejs](../../README.md) / [Exports](../../modules.md) / [api/PlayerManager](../../modules/api_playermanager.md) / PlayerManager

# Class: PlayerManager

[api/PlayerManager](../../modules/api_playermanager.md).PlayerManager

## Hierarchy

* *EventEmitter*

  ↳ **PlayerManager**

## Table of contents

### Constructors

- [constructor](playermanager.playermanager.md#constructor)

### Properties

- [#\_nodes](playermanager.playermanager.md##_nodes)
- [#\_players](playermanager.playermanager.md##_players)
- [eventBuffer](playermanager.playermanager.md#eventbuffer)
- [nodes](playermanager.playermanager.md#nodes)
- [reconnectionDefaults](playermanager.playermanager.md#reconnectiondefaults)
- [send](playermanager.playermanager.md#send)
- [userId](playermanager.playermanager.md#userid)

### Accessors

- [ideal](playermanager.playermanager.md#ideal)
- [players](playermanager.playermanager.md#players)

### Methods

- [createPlayer](playermanager.playermanager.md#createplayer)
- [destroyPlayer](playermanager.playermanager.md#destroyplayer)
- [emit](playermanager.playermanager.md#emit)
- [init](playermanager.playermanager.md#init)
- [off](playermanager.playermanager.md#off)
- [on](playermanager.playermanager.md#on)
- [once](playermanager.playermanager.md#once)
- [serverUpdate](playermanager.playermanager.md#serverupdate)
- [stateUpdate](playermanager.playermanager.md#stateupdate)

## Constructors

### constructor

\+ **new PlayerManager**(`options`: [*PlayerManagerOptions*](../../interfaces/api/types.playermanageroptions.md)): [*PlayerManager*](playermanager.playermanager.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | [*PlayerManagerOptions*](../../interfaces/api/types.playermanageroptions.md) | The player manager options.    |

**Returns:** [*PlayerManager*](playermanager.playermanager.md)

Defined in: [api/PlayerManager.ts:61](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L61)

## Properties

### #\_nodes

• `Private` `Readonly` **#\_nodes**: [*NodeOptions*](../../interfaces/api/types.nodeoptions.md) & { `id`: *string* \| *number*  }[]

The configured nodes.

Defined in: [api/PlayerManager.ts:61](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L61)

___

### #\_players

• `Private` **#\_players**: *null* \| *Map*<*string*, [*Player*](player/player.player.md)\>= null

The current player map.

Defined in: [api/PlayerManager.ts:55](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L55)

___

### eventBuffer

• `Optional` **eventBuffer**: *undefined* \| *number*

The default event buffer to use for all configured nodes.

Defined in: [api/PlayerManager.ts:49](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L49)

___

### nodes

• `Readonly` **nodes**: *Map*<*string* \| *number*, [*Node*](node/node.node.md)\>

All connected nodes.

Defined in: [api/PlayerManager.ts:29](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L29)

___

### reconnectionDefaults

• **reconnectionDefaults**: *Required*<[*ReconnectionOptions*](../../interfaces/api/types.reconnectionoptions.md)\>

Default reconnection options.

Defined in: [api/PlayerManager.ts:44](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L44)

___

### send

• `Readonly` **send**: [*SendMethod*](../../modules/api_types.md#sendmethod)

The send method used for disconnecting/connecting from voice channels.

Defined in: [api/PlayerManager.ts:34](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L34)

___

### userId

• **userId**: *null* \| *string*= null

The configured user id.

Defined in: [api/PlayerManager.ts:39](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L39)

## Accessors

### ideal

• **ideal**(): [*Node*](node/node.node.md)[]

An array of ideal nodes, sorted by the amount of penalties one has.

**Returns:** [*Node*](node/node.node.md)[]

Defined in: [api/PlayerManager.ts:89](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L89)

___

### players

• **players**(): *Map*<*string*, [*Player*](player/player.player.md)\>

Every player spanning across each configured node..

**Returns:** *Map*<*string*, [*Player*](player/player.player.md)\>

Defined in: [api/PlayerManager.ts:96](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L96)

## Methods

### createPlayer

▸ **createPlayer**(`guildId`: *string*, `options?`: [*CreatePlayerOptions*](../../interfaces/api/types.createplayeroptions.md)): [*Player*](player/player.player.md)

Creates a new player.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`guildId` | *string* | - | The guild id.   |
`options` | [*CreatePlayerOptions*](../../interfaces/api/types.createplayeroptions.md) | ... | The transport and node to use.    |

**Returns:** [*Player*](player/player.player.md)

The created player.

Defined in: [api/PlayerManager.ts:139](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L139)

___

### destroyPlayer

▸ **destroyPlayer**(`guildId`: *string*): *Promise*<*boolean*\>

Destroys a player.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`guildId` | *string* | The Guild ID of the player to destroy.    |

**Returns:** *Promise*<*boolean*\>

Whether the player was destroyed.

Defined in: [api/PlayerManager.ts:159](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L159)

___

### emit

▸ **emit**<E\>(`event`: E, ...`args`: PlayerManagerEvents[E]): *boolean*

#### Type parameters:

Name | Type |
------ | ------ |
`E` | ManagerEvent |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`...args` | PlayerManagerEvents[E] |

**Returns:** *boolean*

Defined in: [api/PlayerManager.ts:201](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L201)

___

### init

▸ **init**(`userId?`: *null* \| *string*): *Promise*<*void*\>

Initializes every configured node.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`userId` | *null* \| *string* | ... | The user id to use.    |

**Returns:** *Promise*<*void*\>

Defined in: [api/PlayerManager.ts:113](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L113)

___

### off

▸ **off**<E\>(`event`: E, `listener`: (...`args`: PlayerManagerEvents[E]) => *void*): [*PlayerManager*](playermanager.playermanager.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | ManagerEvent |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (...`args`: PlayerManagerEvents[E]) => *void* |

**Returns:** [*PlayerManager*](playermanager.playermanager.md)

Defined in: [api/PlayerManager.ts:199](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L199)

___

### on

▸ **on**<E\>(`event`: E, `listener`: (...`args`: PlayerManagerEvents[E]) => *void*): [*PlayerManager*](playermanager.playermanager.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | ManagerEvent |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (...`args`: PlayerManagerEvents[E]) => *void* |

**Returns:** [*PlayerManager*](playermanager.playermanager.md)

Defined in: [api/PlayerManager.ts:195](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L195)

___

### once

▸ **once**<E\>(`event`: E, `listener`: (...`args`: PlayerManagerEvents[E]) => *void*): [*PlayerManager*](playermanager.playermanager.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | ManagerEvent |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (...`args`: PlayerManagerEvents[E]) => *void* |

**Returns:** [*PlayerManager*](playermanager.playermanager.md)

Defined in: [api/PlayerManager.ts:197](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L197)

___

### serverUpdate

▸ **serverUpdate**(`update`: [*DiscordVoiceServer*](../../interfaces/api/types.discordvoiceserver.md)): *Promise*<*void*\>

Used for providing voice server updates to lavalink.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`update` | [*DiscordVoiceServer*](../../interfaces/api/types.discordvoiceserver.md) | The voice server update sent by Discord.    |

**Returns:** *Promise*<*void*\>

Defined in: [api/PlayerManager.ts:168](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L168)

___

### stateUpdate

▸ **stateUpdate**(`update`: [*DiscordVoiceState*](../../interfaces/api/types.discordvoicestate.md)): *Promise*<*void*\>

Used for providing voice state updates to lavalink

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`update` | [*DiscordVoiceState*](../../interfaces/api/types.discordvoicestate.md) | The voice state update sent by Discord.    |

**Returns:** *Promise*<*void*\>

Defined in: [api/PlayerManager.ts:181](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L181)
