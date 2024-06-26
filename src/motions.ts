import type {RemotePlayerInterface} from "@workadventure/iframe-api-typings"
import {findTilesId} from "./findTileset"

interface DataSubscribeMotion {
    playerId: number
    motionName: keyof typeof motions
    attackerId: number
}

function calculateVolume(p1: { x:number,y:number },p2:{ x:number,y:number }){
    const distanceX = Math.abs( p1.x/32 - p2.x/32);
    const distanceY = Math.abs( p1.y/32 - p2.y/32);
    const distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY);
    return 1 - distance/10;
}

function playSound(asset_path:string, volume:number){
    const sound = WA.sound.loadSound(asset_path);
    sound.play({volume});
}

export const subscribeMotion = async ({playerId, motionName, attackerId}: DataSubscribeMotion, tilesId: Awaited<ReturnType<typeof findTilesId>>) => {
    motions[motionName](
        playerId === WA.player.playerId 
            ? {
                position: await WA.player.getPosition(),
                playerId,
            }
            : WA.players.get(playerId) as any, 
        tilesId,
        attackerId
    )
}

export const motions = {
    piano: (
        player: RemotePlayerInterface, 
        tilesId: Awaited<ReturnType<typeof findTilesId>>,
        attackerId: number
    ) => {
        const x = Math.ceil(player.position.x/32) - 1
        const y = Math.ceil(player.position.y/32) - 4

        WA.player.getPosition().then(myPosition =>{
            const volume = calculateVolume(myPosition, player.position)
            if (volume < 0) return;
            playSound("_assets_/Piano.mp3", volume);
        })

        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
            lauchPopup(
                attackerId,
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
        tilesId: Awaited<ReturnType<typeof findTilesId>>,
        attackerId: number
    ) => {
        const x = Math.ceil(player.position.x/32) - 2
        const y = Math.ceil(player.position.y/32) - 5

        WA.player.getPosition().then(myPosition =>{
            const volume = calculateVolume(myPosition, player.position)
            if (volume < 0) return;
            playSound("_assets_/Roquette.mp3", volume);
        })
        
        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
            lauchPopup(
                attackerId,
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
        tilesId: Awaited<ReturnType<typeof findTilesId>>,
        attackerId: number
    ) => {
        const x = Math.ceil(player.position.x/32) - 1
        const y = Math.ceil(player.position.y/32) - 3
        WA.player.getPosition().then(myPosition =>{
            const volume = calculateVolume(myPosition, player.position)
            if (volume < 0) return;
            playSound("_assets_/Cri.mp3", volume);
        })

        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
            lauchPopup(
                attackerId,
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
        tilesId: Awaited<ReturnType<typeof findTilesId>>,
        attackerId: number
    ) => {
        const x = Math.ceil(player.position.x/32) - 1
        const y = Math.ceil(player.position.y/32) - 1

        WA.player.getPosition().then(myPosition =>{
            const volume = calculateVolume(myPosition, player.position)
            if (volume < 0) return;
            playSound("_assets_/John_Cena.mp3", volume);
        })

        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
            lauchPopup(
                attackerId,
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
        tilesId: Awaited<ReturnType<typeof findTilesId>>,
        attackerId: number
    ) => {
        const x = Math.ceil(player.position.x/32) - 1
        const y = Math.ceil(player.position.y/32) - 3
        WA.player.getPosition().then(myPosition =>{
            const volume = calculateVolume(myPosition, player.position)
            if (volume < 0) return;
            playSound("_assets_/Feu.mp3", volume);
        })
        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
            lauchPopup(
                attackerId,
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
        tilesId: Awaited<ReturnType<typeof findTilesId>>,
        attackerId: number
    ) => {
        const x = Math.ceil(player.position.x/32) - 1
        const y = Math.ceil(player.position.y/32) - 3

        WA.player.getPosition().then(myPosition =>{
            const volume = calculateVolume(myPosition, player.position)
            if (volume < 0) return;
            playSound("_assets_/Enclume.mp3", volume);
        })

        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
            lauchPopup(
                attackerId,
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
        tilesId: Awaited<ReturnType<typeof findTilesId>>,
        attackerId: number
    ) => {
        const x = Math.ceil(player.position.x/32) - 1
        const y = Math.ceil(player.position.y/32) - 1

        WA.player.getPosition().then(myPosition =>{
            const volume = calculateVolume(myPosition, player.position)
            if (volume < 0) return;
            playSound("_assets_/fart.mp3", volume);
        });

        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
            lauchPopup(
                attackerId,
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
        tilesId: Awaited<ReturnType<typeof findTilesId>>,
        attackerId: number
    ) => {
        const x = Math.ceil(player.position.x/32) - 2
        const y = Math.ceil(player.position.y/32) - 5

        WA.player.getPosition().then(myPosition =>{
            const volume = calculateVolume(myPosition, player.position)
            if (volume < 0) return;
            playSound("_assets_/Roquette.mp3", volume);
        })

        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
            lauchPopup(
                attackerId,
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

    fart: (
        player: RemotePlayerInterface,
        tilesId: Awaited<ReturnType<typeof findTilesId>>,
        attackerId: number
    ) => {
        const x = Math.ceil(player.position.x/32) - 2
        const y = Math.ceil(player.position.y/32) - 2

        playSound("_assets_/Fart_global.mp3", 1);
        if(player.playerId === WA.player.playerId){
            WA.controls.disablePlayerControls()
        }
        WA.room.setTiles([
            {x, y, tile: tilesId.fart.firstgid, layer: "rage"}
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
    piano: "{playerName} vous a jeté un piano !",
    explosion: "{playerName} vous a fait explosé !",
    lightning: "{playerName} vous a foudroyé !",
    punchMachine: "{playerName} vous a frappé !",
    fireball: "{playerName} vous a brûlé !",
    anvil: "{playerName} vous a écrasé avec une enclume !",
    fartOn: "{playerName} vous a lâché un pet !",
    car: "{playerName} vous a écrasé avec une voiture !",
    fart: "Vous sentez tous la masterclass de {playerName} !",
}

const lauchPopup = async (
    attackerId: number,
    motionName: keyof typeof motions
) => {
    const attacker = WA.players.get(attackerId) as RemotePlayerInterface
    WA.ui.displayActionMessage({
        message: messages[motionName].replace("{playerName}", attacker.name),
        callback: () => {
        }
    });
}