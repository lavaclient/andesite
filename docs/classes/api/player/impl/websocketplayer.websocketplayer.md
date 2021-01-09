[andesitejs](../../../../README.md) / [Exports](../../../../modules.md) / [api/player/impl/WebSocketPlayer](../../../../modules/api_player_impl_websocketplayer.md) / WebSocketPlayer

# Class: WebSocketPlayer

[api/player/impl/WebSocketPlayer](../../../../modules/api_player_impl_websocketplayer.md).WebSocketPlayer

## Hierarchy

* [*Player*](../player.player.md)

  ↳ **WebSocketPlayer**

## Table of contents

### Constructors

- [constructor](websocketplayer.websocketplayer.md#constructor)

### Properties

- [#\_server](websocketplayer.websocketplayer.md##_server)
- [#\_sessionId](websocketplayer.websocketplayer.md##_sessionid)
- [#node](websocketplayer.websocketplayer.md##node)
- [channelId](websocketplayer.websocketplayer.md#channelid)
- [connected](websocketplayer.websocketplayer.md#connected)
- [guildId](websocketplayer.websocketplayer.md#guildid)
- [playing](websocketplayer.websocketplayer.md#playing)
- [state](websocketplayer.websocketplayer.md#state)
- [timestamp](websocketplayer.websocketplayer.md#timestamp)
- [track](websocketplayer.websocketplayer.md#track)

### Accessors

- [filters](websocketplayer.websocketplayer.md#filters)
- [manager](websocketplayer.websocketplayer.md#manager)
- [node](websocketplayer.websocketplayer.md#node)

### Methods

- [connect](websocketplayer.websocketplayer.md#connect)
- [debug](websocketplayer.websocketplayer.md#debug)
- [destroy](websocketplayer.websocketplayer.md#destroy)
- [disconnect](websocketplayer.websocketplayer.md#disconnect)
- [emit](websocketplayer.websocketplayer.md#emit)
- [fetchState](websocketplayer.websocketplayer.md#fetchstate)
- [handleEvent](websocketplayer.websocketplayer.md#handleevent)
- [handleVoiceUpdate](websocketplayer.websocketplayer.md#handlevoiceupdate)
- [make](websocketplayer.websocketplayer.md#make)
- [off](websocketplayer.websocketplayer.md#off)
- [on](websocketplayer.websocketplayer.md#on)
- [once](websocketplayer.websocketplayer.md#once)
- [playTrack](websocketplayer.websocketplayer.md#playtrack)
- [resume](websocketplayer.websocketplayer.md#resume)
- [seekTo](websocketplayer.websocketplayer.md#seekto)
- [sendVoiceServerUpdate](websocketplayer.websocketplayer.md#sendvoiceserverupdate)
- [setFilters](websocketplayer.websocketplayer.md#setfilters)
- [setPaused](websocketplayer.websocketplayer.md#setpaused)
- [setVolume](websocketplayer.websocketplayer.md#setvolume)
- [stop](websocketplayer.websocketplayer.md#stop)
- [update](websocketplayer.websocketplayer.md#update)
- [create](websocketplayer.websocketplayer.md#create)

## Constructors

### constructor

\+ **new WebSocketPlayer**(`node`: [*Node*](../../node/node.node.md), `guildId`: *string*): [*WebSocketPlayer*](websocketplayer.websocketplayer.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`node` | [*Node*](../../node/node.node.md) | The node instance.   |
`guildId` | *string* | The guild id instance.    |

**Returns:** [*WebSocketPlayer*](websocketplayer.websocketplayer.md)

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:76](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L76)

## Properties

### #\_server

• `Private` **#\_server**: *null* \| [*DiscordVoiceServer*](../../../../interfaces/api/types.discordvoiceserver.md)= null

The current voice server.

Inherited from: [Player](../player.player.md).[#_server](../player.player.md##_server)

Defined in: [api/player/Player.ts:70](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L70)

___

### #\_sessionId

• `Private` **#\_sessionId**: *null* \| *string*= null

The session id to use for the VoiceServerUpdate method..

Inherited from: [Player](../player.player.md).[#_sessionId](../player.player.md##_sessionid)

Defined in: [api/player/Player.ts:64](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L64)

___

### #node

• `Private` `Readonly` **#node**: [*Node*](../../node/node.node.md)

The node this player is hosted on.

Inherited from: [Player](../player.player.md).[#node](../player.player.md##node)

Defined in: [api/player/Player.ts:76](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L76)

___

### channelId

• **channelId**: *null* \| *string*

The ID of the channel this player is connected to.

Inherited from: [Player](../player.player.md).[channelId](../player.player.md#channelid)

Defined in: [api/player/Player.ts:33](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L33)

___

### connected

• **connected**: *boolean*

Whether this player is connected to a voice channel or not.

Inherited from: [Player](../player.player.md).[connected](../player.player.md#connected)

Defined in: [api/player/Player.ts:38](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L38)

___

### guildId

• `Readonly` **guildId**: *string*

The ID of the guild this player is for.

Inherited from: [Player](../player.player.md).[guildId](../player.player.md#guildid)

Defined in: [api/player/Player.ts:28](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L28)

___

### playing

• **playing**: *boolean*

Whether this player is playing or not.

Inherited from: [Player](../player.player.md).[playing](../player.player.md#playing)

Defined in: [api/player/Player.ts:48](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L48)

___

### state

• **state**: *null* \| [*PlayerState*](../../../../interfaces/api/types.playerstate.md)

The state of this player.

Inherited from: [Player](../player.player.md).[state](../player.player.md#state)

Defined in: [api/player/Player.ts:43](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L43)

___

### timestamp

• **timestamp**: *null* \| *number*

The timestamp in which this player started playing.

Inherited from: [Player](../player.player.md).[timestamp](../player.player.md#timestamp)

Defined in: [api/player/Player.ts:58](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L58)

___

### track

• **track**: *null* \| *string*

The current track that is playing.

Inherited from: [Player](../player.player.md).[track](../player.player.md#track)

Defined in: [api/player/Player.ts:53](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L53)

## Accessors

### filters

• **filters**(): [*FilterChain*](../filterchain.filterchain.md)

The current filters that are applied.

**Returns:** [*FilterChain*](../filterchain.filterchain.md)

Defined in: [api/player/Player.ts:125](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L125)

___

### manager

• **manager**(): [*PlayerManager*](../../playermanager.playermanager.md)

The player manager.

**Returns:** [*PlayerManager*](../../playermanager.playermanager.md)

Defined in: [api/player/Player.ts:118](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L118)

___

### node

• **node**(): [*Node*](../../node/node.node.md)

The node this player is hosted on.

**Returns:** [*Node*](../../node/node.node.md)

Defined in: [api/player/Player.ts:111](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L111)

## Methods

### connect

▸ **connect**(`channel`: *null* \| *string* \| { `id`: *string*  }, `options?`: [*ConnectOptions*](../../../../interfaces/api/types.connectoptions.md)): [*Player*](../player.player.md)

Connects this player to a voice channel.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`channel` | *null* \| *string* \| { `id`: *string*  } | - | A voice channel object or id.   |
`options` | [*ConnectOptions*](../../../../interfaces/api/types.connectoptions.md) | ... | Options for self deafening or muting.    |

**Returns:** [*Player*](../player.player.md)

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:158](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L158)

___

### debug

▸ `Protected`**debug**(`message`: *string*): *void*

Used for general debugging.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`message` | *string* | The debug message.   |

**Returns:** *void*

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:314](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L314)

___

### destroy

▸ **destroy**(): *Promise*<[*Player*](../player.player.md)\>

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/WebSocketPlayer.ts:59](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/WebSocketPlayer.ts#L59)

___

### disconnect

▸ **disconnect**(): [*Player*](../player.player.md)

Disconnects this player from the voice channel.

**Returns:** [*Player*](../player.player.md)

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:179](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L179)

___

### emit

▸ **emit**<E\>(`event`: E, ...`args`: PlayerEvents[E]): *boolean*

#### Type parameters:

Name | Type |
------ | ------ |
`E` | *trackStart* \| *trackStuck* \| *trackEnd* \| *trackException* \| *webSocketClosed* \| *move* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`...args` | PlayerEvents[E] |

**Returns:** *boolean*

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:149](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L149)

___

### fetchState

▸ **fetchState**(): *Promise*<[*PlayerState*](../../../../interfaces/api/types.playerstate.md)\>

Fetches the player state from the andesite instance.

**Returns:** *Promise*<[*PlayerState*](../../../../interfaces/api/types.playerstate.md)\>

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:186](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L186)

___

### handleEvent

▸ **handleEvent**(`event`: [*Event*](../../../../modules/api_types.md#event)): *Promise*<*boolean*\>

Handles an event sent by the andesite instance.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | [*Event*](../../../../modules/api_types.md#event) | The received event    |

**Returns:** *Promise*<*boolean*\>

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:195](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L195)

___

### handleVoiceUpdate

▸ **handleVoiceUpdate**(`update`: [*DiscordVoiceServer*](../../../../interfaces/api/types.discordvoiceserver.md) \| [*DiscordVoiceState*](../../../../interfaces/api/types.discordvoicestate.md)): *Promise*<[*Player*](../player.player.md)\>

Handles a voice server or state update.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`update` | [*DiscordVoiceServer*](../../../../interfaces/api/types.discordvoiceserver.md) \| [*DiscordVoiceState*](../../../../interfaces/api/types.discordvoicestate.md) | The voice server or state update.    |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:228](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L228)

___

### make

▸ `Private`**make**<OP, P\>(`op`: OP, `payload`: P): *Promise*<*void*\>

#### Type parameters:

Name | Type |
------ | ------ |
`OP` | *string* \| *number* |
`P` | *any* |

#### Parameters:

Name | Type |
------ | ------ |
`op` | OP |
`payload` | P |

**Returns:** *Promise*<*void*\>

Defined in: [api/player/impl/WebSocketPlayer.ts:69](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/WebSocketPlayer.ts#L69)

___

### off

▸ **off**<E\>(`event`: E, `listener`: (`args`: PlayerEvents[E]) => *void*): *any*

#### Type parameters:

Name | Type |
------ | ------ |
`E` | *trackStart* \| *trackStuck* \| *trackEnd* \| *trackException* \| *webSocketClosed* \| *move* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (`args`: PlayerEvents[E]) => *void* |

**Returns:** *any*

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:143](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L143)

___

### on

▸ **on**<E\>(`event`: E, `listener`: (`args`: PlayerEvents[E]) => *void*): [*WebSocketPlayer*](websocketplayer.websocketplayer.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | *trackStart* \| *trackStuck* \| *trackEnd* \| *trackException* \| *webSocketClosed* \| *move* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (`args`: PlayerEvents[E]) => *void* |

**Returns:** [*WebSocketPlayer*](websocketplayer.websocketplayer.md)

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:131](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L131)

___

### once

▸ **once**<E\>(`event`: E, `listener`: (`args`: PlayerEvents[E]) => *void*): [*WebSocketPlayer*](websocketplayer.websocketplayer.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | *trackStart* \| *trackStuck* \| *trackEnd* \| *trackException* \| *webSocketClosed* \| *move* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (`args`: PlayerEvents[E]) => *void* |

**Returns:** [*WebSocketPlayer*](websocketplayer.websocketplayer.md)

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:137](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L137)

___

### playTrack

▸ **playTrack**(`track`: *string* \| { `track`: *string*  }, `options?`: [*PlayOptions*](../../../../interfaces/api/types.playoptions.md)): *Promise*<[*Player*](../player.player.md)\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`track` | *string* \| { `track`: *string*  } | - |
`options` | [*PlayOptions*](../../../../interfaces/api/types.playoptions.md) | ... |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/WebSocketPlayer.ts:7](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/WebSocketPlayer.ts#L7)

___

### resume

▸ **resume**(): *Promise*<[*Player*](../player.player.md)\>

Resumes this player.

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:251](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L251)

___

### seekTo

▸ **seekTo**(`position`: *number*): *Promise*<[*Player*](../player.player.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`position` | *number* |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/WebSocketPlayer.ts:29](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/WebSocketPlayer.ts#L29)

___

### sendVoiceServerUpdate

▸ `Protected`**sendVoiceServerUpdate**(`update`: [*VoiceServerUpdate*](../../../../interfaces/api/types.voiceserverupdate.md)): *Promise*<[*Player*](../player.player.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`update` | [*VoiceServerUpdate*](../../../../interfaces/api/types.voiceserverupdate.md) |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/WebSocketPlayer.ts:64](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/WebSocketPlayer.ts#L64)

___

### setFilters

▸ **setFilters**(`filters?`: [*FilterChain*](../filterchain.filterchain.md) \| *Partial*<[*FilterMap*](../../../../interfaces/api/types.filtermap.md)\>): *Promise*<[*Player*](../player.player.md)\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`filters` | [*FilterChain*](../filterchain.filterchain.md) \| *Partial*<[*FilterMap*](../../../../interfaces/api/types.filtermap.md)\> | ... |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/WebSocketPlayer.ts:45](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/WebSocketPlayer.ts#L45)

___

### setPaused

▸ **setPaused**(`state`: *boolean*): *Promise*<[*Player*](../player.player.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`state` | *boolean* |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/WebSocketPlayer.ts:21](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/WebSocketPlayer.ts#L21)

___

### setVolume

▸ **setVolume**(`volume?`: *number*): *Promise*<[*Player*](../player.player.md)\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`volume` | *number* | 100 |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/WebSocketPlayer.ts:37](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/WebSocketPlayer.ts#L37)

___

### stop

▸ **stop**(): *Promise*<[*Player*](../player.player.md)\>

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/WebSocketPlayer.ts:16](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/WebSocketPlayer.ts#L16)

___

### update

▸ **update**(`payload`: [*UpdatePlayer*](../../../../interfaces/api/types.updateplayer.md)): *Promise*<[*Player*](../player.player.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`payload` | [*UpdatePlayer*](../../../../interfaces/api/types.updateplayer.md) |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/WebSocketPlayer.ts:54](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/WebSocketPlayer.ts#L54)

___

### create

▸ `Static`**create**(`transport`: [*PlayerTransport*](../../../../modules/api_types.md#playertransport), `node`: [*Node*](../../node/node.node.md), `guildId`: *string*): [*Player*](../player.player.md)

Creates a player.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`transport` | [*PlayerTransport*](../../../../modules/api_types.md#playertransport) | The transport to use. Either "websocket" or "rest".   |
`node` | [*Node*](../../node/node.node.md) | The node.   |
`guildId` | *string* | The guild id.    |

**Returns:** [*Player*](../player.player.md)

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:102](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L102)
