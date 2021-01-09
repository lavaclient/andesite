[andesitejs](../../../README.md) / [Exports](../../../modules.md) / [api/player/Player](../../../modules/api_player_player.md) / Player

# Class: Player

[api/player/Player](../../../modules/api_player_player.md).Player

## Hierarchy

* *EventEmitter*

  ↳ **Player**

  ↳↳ [*RESTPlayer*](impl/restplayer.restplayer.md)

  ↳↳ [*WebSocketPlayer*](impl/websocketplayer.websocketplayer.md)

## Table of contents

### Constructors

- [constructor](player.player.md#constructor)

### Properties

- [#\_server](player.player.md##_server)
- [#\_sessionId](player.player.md##_sessionid)
- [#node](player.player.md##node)
- [channelId](player.player.md#channelid)
- [connected](player.player.md#connected)
- [guildId](player.player.md#guildid)
- [playing](player.player.md#playing)
- [state](player.player.md#state)
- [timestamp](player.player.md#timestamp)
- [track](player.player.md#track)

### Accessors

- [filters](player.player.md#filters)
- [manager](player.player.md#manager)
- [node](player.player.md#node)

### Methods

- [connect](player.player.md#connect)
- [debug](player.player.md#debug)
- [destroy](player.player.md#destroy)
- [disconnect](player.player.md#disconnect)
- [emit](player.player.md#emit)
- [fetchState](player.player.md#fetchstate)
- [handleEvent](player.player.md#handleevent)
- [handleVoiceUpdate](player.player.md#handlevoiceupdate)
- [off](player.player.md#off)
- [on](player.player.md#on)
- [once](player.player.md#once)
- [playTrack](player.player.md#playtrack)
- [resume](player.player.md#resume)
- [seekTo](player.player.md#seekto)
- [sendVoiceServerUpdate](player.player.md#sendvoiceserverupdate)
- [setFilters](player.player.md#setfilters)
- [setPaused](player.player.md#setpaused)
- [setVolume](player.player.md#setvolume)
- [stop](player.player.md#stop)
- [update](player.player.md#update)
- [create](player.player.md#create)

## Constructors

### constructor

\+ **new Player**(`node`: [*Node*](../node/node.node.md), `guildId`: *string*): [*Player*](player.player.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`node` | [*Node*](../node/node.node.md) | The node instance.   |
`guildId` | *string* | The guild id instance.    |

**Returns:** [*Player*](player.player.md)

Defined in: [api/player/Player.ts:76](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L76)

## Properties

### #\_server

• `Private` **#\_server**: *null* \| [*DiscordVoiceServer*](../../../interfaces/api/types.discordvoiceserver.md)= null

The current voice server.

Defined in: [api/player/Player.ts:70](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L70)

___

### #\_sessionId

• `Private` **#\_sessionId**: *null* \| *string*= null

The session id to use for the VoiceServerUpdate method..

Defined in: [api/player/Player.ts:64](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L64)

___

### #node

• `Private` `Readonly` **#node**: [*Node*](../node/node.node.md)

The node this player is hosted on.

Defined in: [api/player/Player.ts:76](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L76)

___

### channelId

• **channelId**: *null* \| *string*

The ID of the channel this player is connected to.

Defined in: [api/player/Player.ts:33](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L33)

___

### connected

• **connected**: *boolean*

Whether this player is connected to a voice channel or not.

Defined in: [api/player/Player.ts:38](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L38)

___

### guildId

• `Readonly` **guildId**: *string*

The ID of the guild this player is for.

Defined in: [api/player/Player.ts:28](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L28)

___

### playing

• **playing**: *boolean*

Whether this player is playing or not.

Defined in: [api/player/Player.ts:48](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L48)

___

### state

• **state**: *null* \| [*PlayerState*](../../../interfaces/api/types.playerstate.md)

The state of this player.

Defined in: [api/player/Player.ts:43](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L43)

___

### timestamp

• **timestamp**: *null* \| *number*

The timestamp in which this player started playing.

Defined in: [api/player/Player.ts:58](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L58)

___

### track

• **track**: *null* \| *string*

The current track that is playing.

Defined in: [api/player/Player.ts:53](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L53)

## Accessors

### filters

• **filters**(): [*FilterChain*](filterchain.filterchain.md)

The current filters that are applied.

**Returns:** [*FilterChain*](filterchain.filterchain.md)

Defined in: [api/player/Player.ts:125](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L125)

___

### manager

• **manager**(): [*PlayerManager*](../playermanager.playermanager.md)

The player manager.

**Returns:** [*PlayerManager*](../playermanager.playermanager.md)

Defined in: [api/player/Player.ts:118](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L118)

___

### node

• **node**(): [*Node*](../node/node.node.md)

The node this player is hosted on.

**Returns:** [*Node*](../node/node.node.md)

Defined in: [api/player/Player.ts:111](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L111)

## Methods

### connect

▸ **connect**(`channel`: *null* \| *string* \| { `id`: *string*  }, `options?`: [*ConnectOptions*](../../../interfaces/api/types.connectoptions.md)): [*Player*](player.player.md)

Connects this player to a voice channel.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`channel` | *null* \| *string* \| { `id`: *string*  } | - | A voice channel object or id.   |
`options` | [*ConnectOptions*](../../../interfaces/api/types.connectoptions.md) | ... | Options for self deafening or muting.    |

**Returns:** [*Player*](player.player.md)

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

Defined in: [api/player/Player.ts:314](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L314)

___

### destroy

▸ `Abstract`**destroy**(): *Promise*<[*Player*](player.player.md)\>

Destroys this player.

**Returns:** *Promise*<[*Player*](player.player.md)\>

Defined in: [api/player/Player.ts:301](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L301)

___

### disconnect

▸ **disconnect**(): [*Player*](player.player.md)

Disconnects this player from the voice channel.

**Returns:** [*Player*](player.player.md)

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

Defined in: [api/player/Player.ts:149](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L149)

___

### fetchState

▸ **fetchState**(): *Promise*<[*PlayerState*](../../../interfaces/api/types.playerstate.md)\>

Fetches the player state from the andesite instance.

**Returns:** *Promise*<[*PlayerState*](../../../interfaces/api/types.playerstate.md)\>

Defined in: [api/player/Player.ts:186](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L186)

___

### handleEvent

▸ **handleEvent**(`event`: [*Event*](../../../modules/api_types.md#event)): *Promise*<*boolean*\>

Handles an event sent by the andesite instance.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | [*Event*](../../../modules/api_types.md#event) | The received event    |

**Returns:** *Promise*<*boolean*\>

Defined in: [api/player/Player.ts:195](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L195)

___

### handleVoiceUpdate

▸ **handleVoiceUpdate**(`update`: [*DiscordVoiceServer*](../../../interfaces/api/types.discordvoiceserver.md) \| [*DiscordVoiceState*](../../../interfaces/api/types.discordvoicestate.md)): *Promise*<[*Player*](player.player.md)\>

Handles a voice server or state update.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`update` | [*DiscordVoiceServer*](../../../interfaces/api/types.discordvoiceserver.md) \| [*DiscordVoiceState*](../../../interfaces/api/types.discordvoicestate.md) | The voice server or state update.    |

**Returns:** *Promise*<[*Player*](player.player.md)\>

Defined in: [api/player/Player.ts:228](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L228)

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

Defined in: [api/player/Player.ts:143](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L143)

___

### on

▸ **on**<E\>(`event`: E, `listener`: (`args`: PlayerEvents[E]) => *void*): [*Player*](player.player.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | *trackStart* \| *trackStuck* \| *trackEnd* \| *trackException* \| *webSocketClosed* \| *move* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (`args`: PlayerEvents[E]) => *void* |

**Returns:** [*Player*](player.player.md)

Defined in: [api/player/Player.ts:131](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L131)

___

### once

▸ **once**<E\>(`event`: E, `listener`: (`args`: PlayerEvents[E]) => *void*): [*Player*](player.player.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | *trackStart* \| *trackStuck* \| *trackEnd* \| *trackException* \| *webSocketClosed* \| *move* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (`args`: PlayerEvents[E]) => *void* |

**Returns:** [*Player*](player.player.md)

Defined in: [api/player/Player.ts:137](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L137)

___

### playTrack

▸ `Abstract`**playTrack**(`track`: *string* \| { `track`: *string*  }, `options?`: [*PlayOptions*](../../../interfaces/api/types.playoptions.md)): *Promise*<[*Player*](player.player.md)\>

Plays a track on the guild.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`track` | *string* \| { `track`: *string*  } | Base64 encoded lavaplayer track. If null, the player is stopped. Only use null for mixer players, for regular players use stop instead.   |
`options?` | [*PlayOptions*](../../../interfaces/api/types.playoptions.md) |  |

**Returns:** *Promise*<[*Player*](player.player.md)\>

Defined in: [api/player/Player.ts:261](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L261)

___

### resume

▸ **resume**(): *Promise*<[*Player*](player.player.md)\>

Resumes this player.

**Returns:** *Promise*<[*Player*](player.player.md)\>

Defined in: [api/player/Player.ts:251](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L251)

___

### seekTo

▸ `Abstract`**seekTo**(`pos`: *number*): *Promise*<[*Player*](player.player.md)\>

Update the track position.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`pos` | *number* | Timestamp to set the current track to, in milliseconds    |

**Returns:** *Promise*<[*Player*](player.player.md)\>

Defined in: [api/player/Player.ts:278](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L278)

___

### sendVoiceServerUpdate

▸ `Protected` `Abstract`**sendVoiceServerUpdate**(`update`: [*VoiceServerUpdate*](../../../interfaces/api/types.voiceserverupdate.md)): *Promise*<[*Player*](player.player.md)\>

Provides a voice server update event to the andesite instance..

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`update` | [*VoiceServerUpdate*](../../../interfaces/api/types.voiceserverupdate.md) | The voice update payload.    |

**Returns:** *Promise*<[*Player*](player.player.md)\>

Defined in: [api/player/Player.ts:307](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L307)

___

### setFilters

▸ `Abstract`**setFilters**(`filters`: [*FilterChain*](filterchain.filterchain.md) \| [*FilterMap*](../../../interfaces/api/types.filtermap.md)): *Promise*<[*Player*](player.player.md)\>

Configures the audio filters for the guild

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`filters` | [*FilterChain*](filterchain.filterchain.md) \| [*FilterMap*](../../../interfaces/api/types.filtermap.md) | The filter map.    |

**Returns:** *Promise*<[*Player*](player.player.md)\>

Defined in: [api/player/Player.ts:290](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L290)

___

### setPaused

▸ `Abstract`**setPaused**(`state?`: *boolean*): *Promise*<[*Player*](player.player.md)\>

Update the pause state of this player.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state?` | *boolean* | Whether or not to pause the player    |

**Returns:** *Promise*<[*Player*](player.player.md)\>

Defined in: [api/player/Player.ts:272](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L272)

___

### setVolume

▸ `Abstract`**setVolume**(`volume?`: *number*): *Promise*<[*Player*](player.player.md)\>

Update the volume of this player.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`volume?` | *number* | Volume to set on the player    |

**Returns:** *Promise*<[*Player*](player.player.md)\>

Defined in: [api/player/Player.ts:284](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L284)

___

### stop

▸ `Abstract`**stop**(): *Promise*<[*Player*](player.player.md)\>

Stops playing audio on the guild.

**Returns:** *Promise*<[*Player*](player.player.md)\>

Defined in: [api/player/Player.ts:266](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L266)

___

### update

▸ `Abstract`**update**(`payload`: [*UpdatePlayer*](../../../interfaces/api/types.updateplayer.md)): *Promise*<[*Player*](player.player.md)\>

Update the player.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`payload` | [*UpdatePlayer*](../../../interfaces/api/types.updateplayer.md) | The player update data.    |

**Returns:** *Promise*<[*Player*](player.player.md)\>

Defined in: [api/player/Player.ts:296](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L296)

___

### create

▸ `Static`**create**(`transport`: [*PlayerTransport*](../../../modules/api_types.md#playertransport), `node`: [*Node*](../node/node.node.md), `guildId`: *string*): [*Player*](player.player.md)

Creates a player.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`transport` | [*PlayerTransport*](../../../modules/api_types.md#playertransport) | The transport to use. Either "websocket" or "rest".   |
`node` | [*Node*](../node/node.node.md) | The node.   |
`guildId` | *string* | The guild id.    |

**Returns:** [*Player*](player.player.md)

Defined in: [api/player/Player.ts:102](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L102)
