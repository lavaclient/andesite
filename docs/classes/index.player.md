[andesitejs](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / Player

# Class: Player

[index](../modules/index.md).Player

## Hierarchy

* *EventEmitter*

  ↳ **Player**

## Table of contents

### Constructors

- [constructor](index.player.md#constructor)

### Properties

- [#\_server](index.player.md##_server)
- [#\_sessionId](index.player.md##_sessionid)
- [#node](index.player.md##node)
- [channelId](index.player.md#channelid)
- [connected](index.player.md#connected)
- [guildId](index.player.md#guildid)
- [playing](index.player.md#playing)
- [state](index.player.md#state)
- [timestamp](index.player.md#timestamp)
- [track](index.player.md#track)

### Accessors

- [filters](index.player.md#filters)
- [manager](index.player.md#manager)
- [node](index.player.md#node)

### Methods

- [connect](index.player.md#connect)
- [debug](index.player.md#debug)
- [destroy](index.player.md#destroy)
- [disconnect](index.player.md#disconnect)
- [emit](index.player.md#emit)
- [fetchState](index.player.md#fetchstate)
- [handleEvent](index.player.md#handleevent)
- [handleVoiceUpdate](index.player.md#handlevoiceupdate)
- [off](index.player.md#off)
- [on](index.player.md#on)
- [once](index.player.md#once)
- [playTrack](index.player.md#playtrack)
- [resume](index.player.md#resume)
- [seekTo](index.player.md#seekto)
- [sendVoiceServerUpdate](index.player.md#sendvoiceserverupdate)
- [setFilters](index.player.md#setfilters)
- [setPaused](index.player.md#setpaused)
- [setVolume](index.player.md#setvolume)
- [stop](index.player.md#stop)
- [update](index.player.md#update)
- [create](index.player.md#create)

## Constructors

### constructor

\+ **new Player**(`node`: [*Node*](api/node/node.node.md), `guildId`: *string*): [*Player*](api/player/player.player.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`node` | [*Node*](api/node/node.node.md) | The node instance.   |
`guildId` | *string* | The guild id instance.    |

**Returns:** [*Player*](api/player/player.player.md)

Defined in: [api/player/Player.ts:76](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L76)

## Properties

### #\_server

• `Private` **#\_server**: *null* \| [*DiscordVoiceServer*](../interfaces/api/types.discordvoiceserver.md)= null

The current voice server.

Defined in: [api/player/Player.ts:70](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L70)

___

### #\_sessionId

• `Private` **#\_sessionId**: *null* \| *string*= null

The session id to use for the VoiceServerUpdate method..

Defined in: [api/player/Player.ts:64](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L64)

___

### #node

• `Private` `Readonly` **#node**: [*Node*](api/node/node.node.md)

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

• **state**: *null* \| [*PlayerState*](../interfaces/api/types.playerstate.md)

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

• **filters**(): [*FilterChain*](api/player/filterchain.filterchain.md)

The current filters that are applied.

**Returns:** [*FilterChain*](api/player/filterchain.filterchain.md)

Defined in: [api/player/Player.ts:125](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L125)

___

### manager

• **manager**(): [*PlayerManager*](api/playermanager.playermanager.md)

The player manager.

**Returns:** [*PlayerManager*](api/playermanager.playermanager.md)

Defined in: [api/player/Player.ts:118](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L118)

___

### node

• **node**(): [*Node*](api/node/node.node.md)

The node this player is hosted on.

**Returns:** [*Node*](api/node/node.node.md)

Defined in: [api/player/Player.ts:111](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L111)

## Methods

### connect

▸ **connect**(`channel`: *null* \| *string* \| { `id`: *string*  }, `options?`: [*ConnectOptions*](../interfaces/api/types.connectoptions.md)): [*Player*](api/player/player.player.md)

Connects this player to a voice channel.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`channel` | *null* \| *string* \| { `id`: *string*  } | - | A voice channel object or id.   |
`options` | [*ConnectOptions*](../interfaces/api/types.connectoptions.md) | ... | Options for self deafening or muting.    |

**Returns:** [*Player*](api/player/player.player.md)

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

▸ `Abstract`**destroy**(): *Promise*<[*Player*](api/player/player.player.md)\>

Destroys this player.

**Returns:** *Promise*<[*Player*](api/player/player.player.md)\>

Defined in: [api/player/Player.ts:301](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L301)

___

### disconnect

▸ **disconnect**(): [*Player*](api/player/player.player.md)

Disconnects this player from the voice channel.

**Returns:** [*Player*](api/player/player.player.md)

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

▸ **fetchState**(): *Promise*<[*PlayerState*](../interfaces/api/types.playerstate.md)\>

Fetches the player state from the andesite instance.

**Returns:** *Promise*<[*PlayerState*](../interfaces/api/types.playerstate.md)\>

Defined in: [api/player/Player.ts:186](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L186)

___

### handleEvent

▸ **handleEvent**(`event`: [*Event*](../modules/api_types.md#event)): *Promise*<*boolean*\>

Handles an event sent by the andesite instance.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | [*Event*](../modules/api_types.md#event) | The received event    |

**Returns:** *Promise*<*boolean*\>

Defined in: [api/player/Player.ts:195](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L195)

___

### handleVoiceUpdate

▸ **handleVoiceUpdate**(`update`: [*DiscordVoiceServer*](../interfaces/api/types.discordvoiceserver.md) \| [*DiscordVoiceState*](../interfaces/api/types.discordvoicestate.md)): *Promise*<[*Player*](api/player/player.player.md)\>

Handles a voice server or state update.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`update` | [*DiscordVoiceServer*](../interfaces/api/types.discordvoiceserver.md) \| [*DiscordVoiceState*](../interfaces/api/types.discordvoicestate.md) | The voice server or state update.    |

**Returns:** *Promise*<[*Player*](api/player/player.player.md)\>

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

▸ **on**<E\>(`event`: E, `listener`: (`args`: PlayerEvents[E]) => *void*): [*Player*](api/player/player.player.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | *trackStart* \| *trackStuck* \| *trackEnd* \| *trackException* \| *webSocketClosed* \| *move* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (`args`: PlayerEvents[E]) => *void* |

**Returns:** [*Player*](api/player/player.player.md)

Defined in: [api/player/Player.ts:131](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L131)

___

### once

▸ **once**<E\>(`event`: E, `listener`: (`args`: PlayerEvents[E]) => *void*): [*Player*](api/player/player.player.md)

#### Type parameters:

Name | Type |
------ | ------ |
`E` | *trackStart* \| *trackStuck* \| *trackEnd* \| *trackException* \| *webSocketClosed* \| *move* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | E |
`listener` | (`args`: PlayerEvents[E]) => *void* |

**Returns:** [*Player*](api/player/player.player.md)

Defined in: [api/player/Player.ts:137](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L137)

___

### playTrack

▸ `Abstract`**playTrack**(`track`: *string* \| { `track`: *string*  }, `options?`: [*PlayOptions*](../interfaces/api/types.playoptions.md)): *Promise*<[*Player*](api/player/player.player.md)\>

Plays a track on the guild.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`track` | *string* \| { `track`: *string*  } | Base64 encoded lavaplayer track. If null, the player is stopped. Only use null for mixer players, for regular players use stop instead.   |
`options?` | [*PlayOptions*](../interfaces/api/types.playoptions.md) |  |

**Returns:** *Promise*<[*Player*](api/player/player.player.md)\>

Defined in: [api/player/Player.ts:261](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L261)

___

### resume

▸ **resume**(): *Promise*<[*Player*](api/player/player.player.md)\>

Resumes this player.

**Returns:** *Promise*<[*Player*](api/player/player.player.md)\>

Defined in: [api/player/Player.ts:251](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L251)

___

### seekTo

▸ `Abstract`**seekTo**(`pos`: *number*): *Promise*<[*Player*](api/player/player.player.md)\>

Update the track position.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`pos` | *number* | Timestamp to set the current track to, in milliseconds    |

**Returns:** *Promise*<[*Player*](api/player/player.player.md)\>

Defined in: [api/player/Player.ts:278](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L278)

___

### sendVoiceServerUpdate

▸ `Protected` `Abstract`**sendVoiceServerUpdate**(`update`: [*VoiceServerUpdate*](../interfaces/api/types.voiceserverupdate.md)): *Promise*<[*Player*](api/player/player.player.md)\>

Provides a voice server update event to the andesite instance..

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`update` | [*VoiceServerUpdate*](../interfaces/api/types.voiceserverupdate.md) | The voice update payload.    |

**Returns:** *Promise*<[*Player*](api/player/player.player.md)\>

Defined in: [api/player/Player.ts:307](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L307)

___

### setFilters

▸ `Abstract`**setFilters**(`filters`: [*FilterChain*](api/player/filterchain.filterchain.md) \| [*FilterMap*](../interfaces/api/types.filtermap.md)): *Promise*<[*Player*](api/player/player.player.md)\>

Configures the audio filters for the guild

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`filters` | [*FilterChain*](api/player/filterchain.filterchain.md) \| [*FilterMap*](../interfaces/api/types.filtermap.md) | The filter map.    |

**Returns:** *Promise*<[*Player*](api/player/player.player.md)\>

Defined in: [api/player/Player.ts:290](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L290)

___

### setPaused

▸ `Abstract`**setPaused**(`state?`: *boolean*): *Promise*<[*Player*](api/player/player.player.md)\>

Update the pause state of this player.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state?` | *boolean* | Whether or not to pause the player    |

**Returns:** *Promise*<[*Player*](api/player/player.player.md)\>

Defined in: [api/player/Player.ts:272](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L272)

___

### setVolume

▸ `Abstract`**setVolume**(`volume?`: *number*): *Promise*<[*Player*](api/player/player.player.md)\>

Update the volume of this player.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`volume?` | *number* | Volume to set on the player    |

**Returns:** *Promise*<[*Player*](api/player/player.player.md)\>

Defined in: [api/player/Player.ts:284](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L284)

___

### stop

▸ `Abstract`**stop**(): *Promise*<[*Player*](api/player/player.player.md)\>

Stops playing audio on the guild.

**Returns:** *Promise*<[*Player*](api/player/player.player.md)\>

Defined in: [api/player/Player.ts:266](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L266)

___

### update

▸ `Abstract`**update**(`payload`: [*UpdatePlayer*](../interfaces/api/types.updateplayer.md)): *Promise*<[*Player*](api/player/player.player.md)\>

Update the player.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`payload` | [*UpdatePlayer*](../interfaces/api/types.updateplayer.md) | The player update data.    |

**Returns:** *Promise*<[*Player*](api/player/player.player.md)\>

Defined in: [api/player/Player.ts:296](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L296)

___

### create

▸ `Static`**create**(`transport`: [*PlayerTransport*](../modules/api_types.md#playertransport), `node`: [*Node*](api/node/node.node.md), `guildId`: *string*): [*Player*](api/player/player.player.md)

Creates a player.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`transport` | [*PlayerTransport*](../modules/api_types.md#playertransport) | The transport to use. Either "websocket" or "rest".   |
`node` | [*Node*](api/node/node.node.md) | The node.   |
`guildId` | *string* | The guild id.    |

**Returns:** [*Player*](api/player/player.player.md)

Defined in: [api/player/Player.ts:102](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/player/Player.ts#L102)
