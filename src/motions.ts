import type {RemotePlayerInterface} from "@workadventure/iframe-api-typings"
import { findTilesId } from "./findTilesId"

interface DataSubscribeMotion {
    playerId: number
    motionName: keyof typeof motions
}

export const subscribeMotion = async ({playerId, motionName}: DataSubscribeMotion, tilesId: Awaited<ReturnType<typeof findTilesId>>) => {
    motions[motionName](
        playerId === WA.player.playerId 
            ? {
                position: await WA.player.getPosition(),
                playerId,
            }
            : WA.players.get(playerId) as any, 
        tilesId
    )
}

export const motions = {
    piano: (
        player: RemotePlayerInterface, 
        tilesId: Awaited<ReturnType<typeof findTilesId>>
    ) => {
        const x = Math.ceil(player.position.x/32) - 1
        const y = Math.ceil(player.position.y/32) - 4
        
        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
        }

        WA.room.setTiles([
            {x, y, tile: tilesId.piano.firstgid, layer: "rage"}
        ])

        setTimeout(
            () => {
                WA.room.setTiles([
                    {x, y, tile: tilesId.void.firstgid, layer: "rage"}
                ])

                if(player.playerId === WA.player.playerId){
                    WA.controls.restorePlayerControls()
                }
            }, 
            500
        )
    },

    explotion: (
        player: RemotePlayerInterface, 
        tilesId: Awaited<ReturnType<typeof findTilesId>>
    ) => {
        const x = Math.ceil(player.position.x/32) - 2
        const y = Math.ceil(player.position.y/32) - 5
        
        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
        }

        WA.room.setTiles([
            {x, y, tile: tilesId.explosion.firstgid, layer: "rage"}
        ])

        setTimeout(
            () => {
                WA.room.setTiles([
                    {x, y, tile: tilesId.void.firstgid, layer: "rage"}
                ])

                if(player.playerId === WA.player.playerId){
                    WA.controls.restorePlayerControls()
                }
            }, 
            1000
        )
    },
} 