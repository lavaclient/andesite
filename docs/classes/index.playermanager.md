[andesitejs](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / PlayerManager

# Class: PlayerManager

[index](../modules/index.md).PlayerManager

## Hierarchy

* *EventEmitter*

  ↳ **PlayerManager**

## Table of contents

### Constructors

- [constructor](index.playermanager.md#constructor)

### Properties

- [#\_nodes](index.playermanager.md##_nodes)
- [#\_players](index.playermanager.md##_players)
- [eventBuffer](index.playermanager.md#eventbuffer)
- [nodes](index.playermanager.md#nodes)
- [reconnectionDefaults](index.playermanager.md#reconnectiondefaults)
- [send](index.playermanager.md#send)
- [userId](index.playermanager.md#userid)

### Accessors

- [ideal](index.playermanager.md#ideal)
- [players](index.playermanager.md#players)

### Methods

- [createPlayer](index.playermanager.md#createplayer)
- [destroyPlayer](index.playermanager.md#destroyplayer)
- [emit](index.playermanager.md#emit)
- [init](index.playermanager.md#init)
- [off](index.playermanager.md#off)
- [on](index.playermanager.md#on)
- [once](index.playermanager.md#once)
- [serverUpdate](index.playermanager.md#serverupdate)
- [stateUpdate](index.playermanager.md#stateupdate)

## Constructors

### constructor

\+ **new PlayerManager**(`options`: [*PlayerManagerOptions*](../interfaces/api/types.playermanageroptions.md)): [*PlayerManager*](api/playermanager.playermanager.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | [*PlayerManagerOptions*](../interfaces/api/types.playermanageroptions.md) | The player manager options.    |

**Returns:** [*PlayerManager*](api/playermanager.playermanager.md)

Defined in: [api/PlayerManager.ts:61](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L61)

## Properties

### #\_nodes

• `Private` `Readonly` **#\_nodes**: [*NodeOptions*](../interfaces/api/types.nodeoptions.md) & { `id`: *string* \| *number*  }[]

The configured nodes.

Defined in: [api/PlayerManager.ts:61](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L61)

___

### #\_players

• `Private` **#\_players**: *null* \| *Map*<*string*, [*Player*](api/player/player.player.md)\>= null

The current player map.

Defined in: [api/PlayerManager.ts:55](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L55)

___

### eventBuffer

• `Optional` **eventBuffer**: *undefined* \| *number*

The default event buffer to use for all configured nodes.

Defined in: [api/PlayerManager.ts:49](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L49)

___

### nodes

• `Readonly` **nodes**: *Map*<*string* \| *number*, [*Node*](api/node/node.node.md)\>

All connected nodes.

Defined in: [api/PlayerManager.ts:29](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L29)

___

### reconnectionDefaults

• **reconnectionDefaults**: *Required*<[*ReconnectionOptions*](../interfaces/api/types.reconnectionoptions.md)\>

Default reconnection options.

Defined in: [api/PlayerManager.ts:44](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L44)

___

### send

• `Readonly` **send**: [*SendMethod*](../modules/api_types.md#sendmethod)

The send method used for disconnecting/connecting from voice channels.

Defined in: [api/PlayerManager.ts:34](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L34)

___

### userId

• **userId**: *null* \| *string*= null

The configured user id.

Defined in: [api/PlayerManager.ts:39](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L39)

## Accessors

### ideal

• **ideal**(): [*Node*](api/node/node.node.md)[]

An array of ideal nodes, sorted by the amount of penalties one has.

**Returns:** [*Node*](api/node/node.node.md)[]

Defined in: [api/PlayerManager.ts:89](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L89)

___

### players

• **players**(): *Map*<*string*, [*Player*](api/player/player.player.md)\>

Every player spanning across each configured node..

**Returns:** *Map*<*string*, [*Player*](api/player/player.player.md)\>

Defined in: [api/PlayerManager.ts:96](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L96)

## Methods

### createPlayer

▸ **createPlayer**(`guildId`: *string*, `options?`: [*CreatePlayerOptions*](../interfaces/api/types.createplayeroptions.md)): [*Player*](api/player/player.player.md)

Creates a new player.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`guildId` | *string* | - | The guild id.   |
`options` | [*CreatePlayerOptions*](../interfaces/api/types.createplayeroptions.md) | ... | The transport and node to use.    |

**Returns:** [*Player*](api/player/player.player.md)

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

▸ **off**<E\>(`event`: E, `listener`: (...`args`: PlayerManagerEvents[E]) => *void*): [*PlayerManager*](api/playermanager.playermanager.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | ManagerEvent |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (...`args`: PlayerManagerEvents[E]) => *void* |

**Returns:** [*PlayerManager*](api/playermanager.playermanager.md)

Defined in: [api/PlayerManager.ts:199](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L199)

___

### on

▸ **on**<E\>(`event`: E, `listener`: (...`args`: PlayerManagerEvents[E]) => *void*): [*PlayerManager*](api/playermanager.playermanager.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | ManagerEvent |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (...`args`: PlayerManagerEvents[E]) => *void* |

**Returns:** [*PlayerManager*](api/playermanager.playermanager.md)

Defined in: [api/PlayerManager.ts:195](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L195)

___

### once

▸ **once**<E\>(`event`: E, `listener`: (...`args`: PlayerManagerEvents[E]) => *void*): [*PlayerManager*](api/playermanager.playermanager.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | ManagerEvent |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (...`args`: PlayerManagerEvents[E]) => *void* |

**Returns:** [*PlayerManager*](api/playermanager.playermanager.md)

Defined in: [api/PlayerManager.ts:197](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L197)

___

### serverUpdate

▸ **serverUpdate**(`update`: [*DiscordVoiceServer*](../interfaces/api/types.discordvoiceserver.md)): *Promise*<*void*\>

Used for providing voice server updates to lavalink.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`update` | [*DiscordVoiceServer*](../interfaces/api/types.discordvoiceserver.md) | The voice server update sent by Discord.    |

**Returns:** *Promise*<*void*\>

Defined in: [api/PlayerManager.ts:168](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L168)

___

### stateUpdate

▸ **stateUpdate**(`update`: [*DiscordVoiceState*](../interfaces/api/types.discordvoicestate.md)): *Promise*<*void*\>

Used for providing voice state updates to lavalink

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`update` | [*DiscordVoiceState*](../interfaces/api/types.discordvoicestate.md) | The voice state update sent by Discord.    |

**Returns:** *Promise*<*void*\>

Defined in: [api/PlayerManager.ts:181](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/PlayerManager.ts#L181)
