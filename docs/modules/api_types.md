[andesitejs](../README.md) / [Exports](../modules.md) / api/types

# Module: api/types

## Table of contents

### Interfaces

- [Band](../interfaces/api/types.band.md)
- [ConnectOptions](../interfaces/api/types.connectoptions.md)
- [CreatePlayerOptions](../interfaces/api/types.createplayeroptions.md)
- [DiscordVoiceServer](../interfaces/api/types.discordvoiceserver.md)
- [DiscordVoiceState](../interfaces/api/types.discordvoicestate.md)
- [Equalizer](../interfaces/api/types.equalizer.md)
- [EventBase](../interfaces/api/types.eventbase.md)
- [Exception](../interfaces/api/types.exception.md)
- [FilterMap](../interfaces/api/types.filtermap.md)
- [Karaoke](../interfaces/api/types.karaoke.md)
- [LoadTracksResponse](../interfaces/api/types.loadtracksresponse.md)
- [MixerPlayer](../interfaces/api/types.mixerplayer.md)
- [NodeMetadata](../interfaces/api/types.nodemetadata.md)
- [NodeOptions](../interfaces/api/types.nodeoptions.md)
- [NodeStats](../interfaces/api/types.nodestats.md)
- [PlayOptions](../interfaces/api/types.playoptions.md)
- [PlayerManagerOptions](../interfaces/api/types.playermanageroptions.md)
- [PlayerState](../interfaces/api/types.playerstate.md)
- [PlaylistInfo](../interfaces/api/types.playlistinfo.md)
- [ReconnectionOptions](../interfaces/api/types.reconnectionoptions.md)
- [StackFrame](../interfaces/api/types.stackframe.md)
- [Timescale](../interfaces/api/types.timescale.md)
- [TrackEndEvent](../interfaces/api/types.trackendevent.md)
- [TrackExceptionEvent](../interfaces/api/types.trackexceptionevent.md)
- [TrackInfo](../interfaces/api/types.trackinfo.md)
- [TrackMetadata](../interfaces/api/types.trackmetadata.md)
- [TrackStartEvent](../interfaces/api/types.trackstartevent.md)
- [TrackStuckEvent](../interfaces/api/types.trackstuckevent.md)
- [Tremolo](../interfaces/api/types.tremolo.md)
- [UpdatePlayer](../interfaces/api/types.updateplayer.md)
- [Vibrato](../interfaces/api/types.vibrato.md)
- [VoiceServerUpdate](../interfaces/api/types.voiceserverupdate.md)
- [Volume](../interfaces/api/types.volume.md)
- [WebSocketClosedEvent](../interfaces/api/types.websocketclosedevent.md)

### Type aliases

- [Dictionary](api_types.md#dictionary)
- [Event](api_types.md#event)
- [EventType](api_types.md#eventtype)
- [LoadTypes](api_types.md#loadtypes)
- [PlayerTransport](api_types.md#playertransport)
- [SendMethod](api_types.md#sendmethod)
- [TrackEndReason](api_types.md#trackendreason)

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

### SendMethod

Ƭ **SendMethod**: (`id`: *string*, `payload`: *any*) => *any*

Defined in: [api/types.ts:768](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L768)

___

### TrackEndReason

Ƭ **TrackEndReason**: *FINISHED* \| *LOAD_FAILED* \| *STOPPED* \| *REPLACED* \| *CLEANUP*

Defined in: [api/types.ts:772](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L772)
