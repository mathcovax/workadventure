import type {RemotePlayerInterface} from "@workadventure/iframe-api-typings"
import {findTilesId } from "./findTileset"

interface Action {
    name: string
    callback: (remotePlayer: RemotePlayerInterface, tilesId: Awaited<ReturnType<typeof findTilesId>>) => void
}

export const actions: Action[] = [
    {
        name: 'Macron, EXPLOSION ! 💥',
        callback: (remotePlayer) => {
            WA.event.broadcast("motions", {
                playerId: remotePlayer.playerId,
                motionName: "explosion",
                attackerId: WA.player.playerId
            });
        }
    },
    {
        name: 'Piano piano ! 🎹',
        callback: (remotePlayer) => {
            WA.event.broadcast("motions", {
                playerId: remotePlayer.playerId,
                motionName: "piano",
                attackerId: WA.player.playerId
            });
        }
    },
    {
        name: 'John Cena ! 🥊',
        callback: (remotePlayer) => {
            WA.event.broadcast("motions", {
                playerId: remotePlayer.playerId,
                motionName: "punchMachine",
                attackerId: WA.player.playerId
            });
        }
    },
    {
        name: 'Mange ça ! 🔨',
        callback: (remotePlayer) => {
            WA.event.broadcast("motions", {
                playerId: remotePlayer.playerId,
                motionName: "anvil",
                attackerId: WA.player.playerId
            });
        }
    },
    {
        name: 'Attaque éclair ! ⚡️',
        callback: (remotePlayer) => {
            WA.event.broadcast("motions", {
                playerId: remotePlayer.playerId,
                motionName: "lightning",
                attackerId: WA.player.playerId
            });
        }
    },
    {
        name: 'Boule de feu ! 🔥',
        callback: (remotePlayer) => {
            WA.event.broadcast("motions", {
                playerId: remotePlayer.playerId,
                motionName: "fireball",
                attackerId: WA.player.playerId
            });
        }
    },
    {
        name: 'Sent moi ça ! 💨',
        callback: (remotePlayer) => {
            WA.event.broadcast("motions", {
                playerId: remotePlayer.playerId,
                motionName: "fartOn",
                attackerId: WA.player.playerId
            });
        }
    },
    {
        name: 'Craché l\'auto ! 🚗',
        callback: (remotePlayer) => {
            WA.event.broadcast("motions", {
                playerId: remotePlayer.playerId,
                motionName: "car",
                attackerId: WA.player.playerId
            });
        }
    },
]


