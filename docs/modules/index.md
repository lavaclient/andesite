[andesitejs](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Enumerations

- [ManagerEvent](../enums/index.managerevent.md)
- [NodeStatus](../enums/index.nodestatus.md)

### Classes

- [FilterChain](../classes/index.filterchain.md)
- [Node](../classes/index.node.md)
- [Player](../classes/index.player.md)
- [PlayerManager](../classes/index.playermanager.md)
- [REST](../classes/index.rest.md)

### Interfaces

- [Band](../interfaces/index.band.md)
- [ConnectOptions](../interfaces/index.connectoptions.md)
- [CreatePlayerOptions](../interfaces/index.createplayeroptions.md)
- [DiscordVoiceServer](../interfaces/index.discordvoiceserver.md)
- [DiscordVoiceState](../interfaces/index.discordvoicestate.md)
- [Equalizer](../interfaces/index.equalizer.md)
- [EventBase](../interfaces/index.eventbase.md)
- [Exception](../interfaces/index.exception.md)
- [FilterMap](../interfaces/index.filtermap.md)
- [Karaoke](../interfaces/index.karaoke.md)
- [LoadTracksResponse](../interfaces/index.loadtracksresponse.md)
- [MixerPlayer](../interfaces/index.mixerplayer.md)
- [NodeMetadata](../interfaces/index.nodemetadata.md)
- [NodeOptions](../interfaces/index.nodeoptions.md)
- [NodeStats](../interfaces/index.nodestats.md)
- [PlayOptions](../interfaces/index.playoptions.md)
- [PlayerManagerOptions](../interfaces/index.playermanageroptions.md)
- [PlayerState](../interfaces/index.playerstate.md)
- [PlaylistInfo](../interfaces/index.playlistinfo.md)
- [ReconnectionOptions](../interfaces/index.reconnectionoptions.md)
- [StackFrame](../interfaces/index.stackframe.md)
- [Timescale](../interfaces/index.timescale.md)
- [TrackEndEvent](../interfaces/index.trackendevent.md)
- [TrackExceptionEvent](../interfaces/index.trackexceptionevent.md)
- [TrackInfo](../interfaces/index.trackinfo.md)
- [TrackMetadata](../interfaces/index.trackmetadata.md)
- [TrackStartEvent](../interfaces/index.trackstartevent.md)
- [TrackStuckEvent](../interfaces/index.trackstuckevent.md)
- [Tremolo](../interfaces/index.tremolo.md)
- [UpdatePlayer](../interfaces/index.updateplayer.md)
- [Vibrato](../interfaces/index.vibrato.md)
- [VoiceServerUpdate](../interfaces/index.voiceserverupdate.md)
- [Volume](../interfaces/index.volume.md)
- [WebSocketClosedEvent](../interfaces/index.websocketclosedevent.md)

### Type aliases

- [Dictionary](index.md#dictionary)
- [Event](index.md#event)
- [EventType](index.md#eventtype)
- [LoadTypes](index.md#loadtypes)
- [PlayerTransport](index.md#playertransport)
- [RequestOptions](index.md#requestoptions)
- [SendMethod](index.md#sendmethod)
- [TrackEndReason](index.md#trackendreason)

## Type aliases

### Dictionary

Ƭ **Dictionary**<T\>: *Record*<*string*, T\>

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *any* |

Defined in: [api/types.ts:766](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L766)

___

### Event

Ƭ **Event**: [*TrackStartEvent*](../interfaces/api/types.trackstartevent.md) \| [*TrackEndEvent*](../interfaces/api/types.trackendevent.md) \| [*TrackExceptionEvent*](../interfaces/api/types.trackexceptionevent.md) \| [*TrackStuckEvent*](../interfaces/api/types.trackstuckevent.md) \| [*WebSocketClosedEvent*](../interfaces/api/types.websocketclosedevent.md)

Defined in: [api/types.ts:770](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L770)

___

### EventType

Ƭ **EventType**: *TrackStartEvent* \| *TrackEndEvent* \| *TrackExceptionEvent* \| *TrackStuckEvent* \| *WebSocketClosedEvent*

Defined in: [api/types.ts:774](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L774)

___

### LoadTypes

Ƭ **LoadTypes**: *TRACK_LOADED* \| *SEARCH_RESULT* \| *PLAYLIST_LOADED* \| *NO_MATCHES* \| *LOAD_FAILED*

- TRACK_LOADED - tracks will only have one track, playlistInfo, cause and severity will be null.
- SEARCH_RESULT - cause and severity will be null.
- PLAYLIST_LOADED - cause and severity will be null.
- NO_MATCHES - all other fields will be null.
- LOAD_FAILED - tracks and playlistInfo will be null.

Defined in: [api/types.ts:789](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L789)

___

### PlayerTransport

Ƭ **PlayerTransport**: *websocket* \| *rest*

"websocket" - controls the player via websocket
"rest"      - controls the player through the rest api.

Defined in: [api/types.ts:764](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L764)

___

### RequestOptions

Ƭ **RequestOptions**: *Omit*<IJSONResponseOptions, *url* \| *parse*\> & { `data?`: { `toString`: () => *string*  } ; `headers?`: [*Dictionary*](api_types.md#dictionary)<*string*\>  }

Defined in: [api/node/REST.ts:131](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/node/REST.ts#L131)

___

### SendMethod

Ƭ **SendMethod**: (`id`: *string*, `payload`: *any*) => *any*

Defined in: [api/types.ts:768](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L768)

___

### TrackEndReason

Ƭ **TrackEndReason**: *FINISHED* \| *LOAD_FAILED* \| *STOPPED* \| *REPLACED* \| *CLEANUP*

Defined in: [api/types.ts:772](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L772)
