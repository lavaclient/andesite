andesitejs / [Exports](modules.md)

# andesitejs

> A feature-rich [andesite](https://github.com/natanbc/andesite) client.

[Support Server](https://discord.gg/vuJxnYk) &bull; [Github](https://github.com/lavaclient/github) 

## Installation

```shell
npm install --save andesitejs
```

or yarn

```shell
yarn add andesitejs
```

## Example

> You must 
>   1. manually send voice state updates via PlayerManagerOptions#send 
>   2. provide voice server/state updates received through the discord gateway.
>   3. initialize the manager with your client's user id as the first parameter.

```ts
import { PlayerManager } from "andesitejs";

const manager = new PlayerManager({
  nodes: [ { host: "localhost", port: 5000 } ],
  send: (id, payload) => sendPayloadToGateway(id, payload)
});

await manager.init("client id")
await manager.stateUpdate(discordStateUpdate)
await manager.serverUpdate(discordServerUpdate)
```

##### Example Command Usage.

```ts
const player = manager.createPlayer(guild.id)
  .connect(voiceChannel);

const query = /^https?:\/\//im.test(message.content)
  ? message.content
  : `ytsearch:${message.content}`;

const { tracks } = await player.node.rest.loadTracks(query);
if (!tracks) {
  return channel.send(`Nothing found for: ${message.content}`);
}

await player.filters.setTimescale({ pitch: 1.2, rate: 1.1 }); // nightcore-esque
await player.playTrack(tracks[0]);
```

##### Player Transports

As described in andesite's API documentation, you can control a player via the websocket or with the REST API.

```ts
manager.createPlayer("guild id", {
  transport: "rest", // can be "websocket" or "rest", defaults to "websocket"
  ...
});
```

---

lavaclient &copy; 2020 - 2021
