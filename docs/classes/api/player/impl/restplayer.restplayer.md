[andesitejs](../../../../README.md) / [Exports](../../../../modules.md) / [api/player/impl/RESTPlayer](../../../../modules/api_player_impl_restplayer.md) / RESTPlayer

# Class: RESTPlayer

[api/player/impl/RESTPlayer](../../../../modules/api_player_impl_restplayer.md).RESTPlayer

## Hierarchy

* [*Player*](../player.player.md)

  ↳ **RESTPlayer**

## Table of contents

### Constructors

- [constructor](restplayer.restplayer.md#constructor)

### Properties

- [#\_server](restplayer.restplayer.md##_server)
- [#\_sessionId](restplayer.restplayer.md##_sessionid)
- [#node](restplayer.restplayer.md##node)
- [channelId](restplayer.restplayer.md#channelid)
- [connected](restplayer.restplayer.md#connected)
- [guildId](restplayer.restplayer.md#guildid)
- [playing](restplayer.restplayer.md#playing)
- [state](restplayer.restplayer.md#state)
- [timestamp](restplayer.restplayer.md#timestamp)
- [track](restplayer.restplayer.md#track)

### Accessors

- [filters](restplayer.restplayer.md#filters)
- [manager](restplayer.restplayer.md#manager)
- [node](restplayer.restplayer.md#node)

### Methods

- [connect](restplayer.restplayer.md#connect)
- [debug](restplayer.restplayer.md#debug)
- [destroy](restplayer.restplayer.md#destroy)
- [disconnect](restplayer.restplayer.md#disconnect)
- [emit](restplayer.restplayer.md#emit)
- [fetchState](restplayer.restplayer.md#fetchstate)
- [handleEvent](restplayer.restplayer.md#handleevent)
- [handleVoiceUpdate](restplayer.restplayer.md#handlevoiceupdate)
- [makeRequest](restplayer.restplayer.md#makerequest)
- [off](restplayer.restplayer.md#off)
- [on](restplayer.restplayer.md#on)
- [once](restplayer.restplayer.md#once)
- [playTrack](restplayer.restplayer.md#playtrack)
- [resume](restplayer.restplayer.md#resume)
- [seekTo](restplayer.restplayer.md#seekto)
- [sendVoiceServerUpdate](restplayer.restplayer.md#sendvoiceserverupdate)
- [setFilters](restplayer.restplayer.md#setfilters)
- [setPaused](restplayer.restplayer.md#setpaused)
- [setVolume](restplayer.restplayer.md#setvolume)
- [stop](restplayer.restplayer.md#stop)
- [update](restplayer.restplayer.md#update)
- [create](restplayer.restplayer.md#create)

## Constructors

### constructor

\+ **new RESTPlayer**(`node`: [*Node*](../../node/node.node.md), `guildId`: *string*): [*RESTPlayer*](restplayer.restplayer.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`node` | [*Node*](../../node/node.node.md) | The node instance.   |
`guildId` | *string* | The guild id instance.    |

**Returns:** [*RESTPlayer*](restplayer.restplayer.md)

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

Defined in: [api/player/impl/RESTPlayer.ts:80](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/RESTPlayer.ts#L80)

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

### makeRequest

▸ `Private`**makeRequest**<T\>(`endpoint`: *string*, `options`: [*RequestOptions*](../../../../modules/api_node_rest.md#requestoptions)): *Promise*<T\>

Makes a request to the andesite node.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`endpoint` | *string* |
`options` | [*RequestOptions*](../../../../modules/api_node_rest.md#requestoptions) |

**Returns:** *Promise*<T\>

Defined in: [api/player/impl/RESTPlayer.ts:102](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/RESTPlayer.ts#L102)

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

▸ **on**<E\>(`event`: E, `listener`: (`args`: PlayerEvents[E]) => *void*): [*RESTPlayer*](restplayer.restplayer.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | *trackStart* \| *trackStuck* \| *trackEnd* \| *trackException* \| *webSocketClosed* \| *move* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (`args`: PlayerEvents[E]) => *void* |

**Returns:** [*RESTPlayer*](restplayer.restplayer.md)

Inherited from: [Player](../player.player.md)

Defined in: [api/player/Player.ts:131](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L131)

___

### once

▸ **once**<E\>(`event`: E, `listener`: (`args`: PlayerEvents[E]) => *void*): [*RESTPlayer*](restplayer.restplayer.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | *trackStart* \| *trackStuck* \| *trackEnd* \| *trackException* \| *webSocketClosed* \| *move* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (`args`: PlayerEvents[E]) => *void* |

**Returns:** [*RESTPlayer*](restplayer.restplayer.md)

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

Defined in: [api/player/impl/RESTPlayer.ts:9](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/RESTPlayer.ts#L9)

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

Defined in: [api/player/impl/RESTPlayer.ts:32](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/RESTPlayer.ts#L32)

___

### sendVoiceServerUpdate

▸ `Protected`**sendVoiceServerUpdate**(`update`: [*VoiceServerUpdate*](../../../../interfaces/api/types.voiceserverupdate.md)): *Promise*<[*Player*](../player.player.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`update` | [*VoiceServerUpdate*](../../../../interfaces/api/types.voiceserverupdate.md) |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/RESTPlayer.ts:89](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/RESTPlayer.ts#L89)

___

### setFilters

▸ **setFilters**(`filters`: [*FilterChain*](../filterchain.filterchain.md) \| [*FilterMap*](../../../../interfaces/api/types.filtermap.md)): *Promise*<[*Player*](../player.player.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`filters` | [*FilterChain*](../filterchain.filterchain.md) \| [*FilterMap*](../../../../interfaces/api/types.filtermap.md) |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/RESTPlayer.ts:51](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/RESTPlayer.ts#L51)

___

### setPaused

▸ **setPaused**(`state?`: *boolean*): *Promise*<[*Player*](../player.player.md)\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`state` | *boolean* | true |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/RESTPlayer.ts:22](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/RESTPlayer.ts#L22)

___

### setVolume

▸ **setVolume**(`volume?`: *number*): *Promise*<[*Player*](../player.player.md)\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`volume` | *number* | 100 |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/RESTPlayer.ts:61](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/RESTPlayer.ts#L61)

___

### stop

▸ **stop**(): *Promise*<[*Player*](../player.player.md)\>

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/RESTPlayer.ts:42](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/RESTPlayer.ts#L42)

___

### update

▸ **update**(`payload`: [*UpdatePlayer*](../../../../interfaces/api/types.updateplayer.md)): *Promise*<[*Player*](../player.player.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`payload` | [*UpdatePlayer*](../../../../interfaces/api/types.updateplayer.md) |

**Returns:** *Promise*<[*Player*](../player.player.md)\>

Overrides: [Player](../player.player.md)

Defined in: [api/player/impl/RESTPlayer.ts:71](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/impl/RESTPlayer.ts#L71)

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
