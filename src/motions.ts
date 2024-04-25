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
            1000
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

    lightning: (
        player: RemotePlayerInterface,
        tilesId: Awaited<ReturnType<typeof findTilesId>>
    ) => {
        const x = Math.ceil(player.position.x/32) - 1
        const y = Math.ceil(player.position.y/32) - 3

        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
        }

        WA.room.setTiles([
            {x, y, tile: tilesId.lightning.firstgid, layer: "rage"}
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

    punchMachine: (
        player: RemotePlayerInterface,
        tilesId: Awaited<ReturnType<typeof findTilesId>>
    ) => {
        const x = Math.ceil(player.position.x/32) - 1
        const y = Math.ceil(player.position.y/32) - 1

        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
        }
        
        WA.room.setTiles([
            {x, y, tile: tilesId.punchMachine.firstgid, layer: "rage"}
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

    fireball: (
        player: RemotePlayerInterface,
        tilesId: Awaited<ReturnType<typeof findTilesId>>
    ) => {
        const x = Math.ceil(player.position.x/32) - 1
        const y = Math.ceil(player.position.y/32) - 3

        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
        }
        
        WA.room.setTiles([
            {x, y, tile: tilesId.fireball.firstgid, layer: "rage"}
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

    anvil: (
        player: RemotePlayerInterface,
        tilesId: Awaited<ReturnType<typeof findTilesId>>
    ) => {
        const x = Math.ceil(player.position.x/32) - 1
        const y = Math.ceil(player.position.y/32) - 3

        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
        }

        WA.room.setTiles([
            {x, y, tile: tilesId.anvil.firstgid, layer: "rage"}
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

    fartOn: (
        player: RemotePlayerInterface,
        tilesId: Awaited<ReturnType<typeof findTilesId>>
    ) => {
        const x = Math.ceil(player.position.x/32) - 1
        const y = Math.ceil(player.position.y/32) - 1

        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
        }
        
        WA.room.setTiles([
            {x, y, tile: tilesId.fartOn.firstgid, layer: "rage"}
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

    car: (
        player: RemotePlayerInterface,
        tilesId: Awaited<ReturnType<typeof findTilesId>>
    ) => {
        const x = Math.ceil(player.position.x/32) - 2
        const y = Math.ceil(player.position.y/32) - 5

        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
        }
        
        WA.room.setTiles([
            {x, y, tile: tilesId.car.firstgid, layer: "rage"}
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