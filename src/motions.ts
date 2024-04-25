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
            lauchPopup(
                WA.player.name,
                "piano"
            )
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

    explosion: (
        player: RemotePlayerInterface, 
        tilesId: Awaited<ReturnType<typeof findTilesId>>
    ) => {
        const x = Math.ceil(player.position.x/32) - 2
        const y = Math.ceil(player.position.y/32) - 5
        
        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
            lauchPopup(
                WA.player.name,
                "explosion"
            )
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
            lauchPopup(
                WA.player.name,
                "lightning"
            )
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
            lauchPopup(
                WA.player.name,
                "punchMachine"
            )
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
            lauchPopup(
                WA.player.name,
                "fireball"
            )
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
            lauchPopup(
                WA.player.name,
                "anvil"
            )
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
            lauchPopup(
                WA.player.name,
                "fartOn"
            )
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
            lauchPopup(
                WA.player.name,
                "car"
            )
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

const messages: Record<keyof typeof motions, string> = {
    piano: "{playerName} vous à jeté un piano !",
    explosion: "{playerName} vous à fait explosé !",
    lightning: "{playerName} vous à foudroyé !",
    punchMachine: "{playerName} vous à frappé !",
    fireball: "{playerName} vous à brûlé !",
    anvil: "{playerName} vous à écrasé avec une enclume !",
    fartOn: "{playerName} vous à lâché un pet !",
    car: "{playerName} vous à écrasé avec une voiture !",
}

const lauchPopup = async (
    playerName: string,
    motionName: keyof typeof motions
) => 
    WA.ui.displayActionMessage({
        message: messages[motionName].replace("{playerName}", playerName),
        callback: () => {
        }
    });