import type {RemotePlayerInterface} from "@workadventure/iframe-api-typings"
import { findTilesId } from "./findTilesId"

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
                motionName: "explotion",
            });
        }
    },
    {
        name: 'Piano piano ! 🎹',
        callback: (remotePlayer) => {
            WA.event.broadcast("motions", {
                playerId: remotePlayer.playerId,
                motionName: "piano",
            });
        }
    },
    {
        name: 'John Cena ! 🥊',
        callback: (remotePlayer) => {
            WA.event.broadcast("motions", {
                playerId: remotePlayer.playerId,
                motionName: "punchMachine",
            });
        }
    },
    {
        name: 'Enclume !',
        callback: (remotePlayer) => {
            
        }
    },
    {
        name: 'Attaque éclair ! ⚡️',
        callback: (remotePlayer) => {
            WA.event.broadcast("motions", {
                playerId: remotePlayer.playerId,
                motionName: "lightning",
            });
        }
    }

]


