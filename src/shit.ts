import { findTilesId } from "./findTileset"

interface Shit {
    ownerName: number
    x: number
    y: number
    id: number
}

function createShit(
    tilesets: Awaited<ReturnType<typeof findTilesId>>, 
    shit: Shit
){
    WA.room.setTiles([
        {
            x: shit.x - 1,
            y: shit.y - 1,
            tile: tilesets.shit.firstgid,
            layer: "shits"
        }
    ])

    WA.room.area.create({
        x: (shit.x - 1) * 32,
        y: (shit.y) * 32,
        height: 32,
        width: 32,
        name: `shit-${shit.id}`
    })

    WA.room.area.onEnter(`shit-${shit.id}`).subscribe(async () => {
        await WA.room.area.delete(`shit-${shit.id}`)
        await WA.state.saveVariable("shits", (WA.state.shits as Shit[]).filter(s => s.id !== shit.id))
        WA.room.setTiles([
            {
                x: shit.x - 1,
                y: shit.y - 1,
                tile: tilesets.void.firstgid,
                layer: "shits"
            }
        ])
        WA.ui.displayActionMessage({
            message: `Tu as marcher sur la merde de ${shit.ownerName}.`,
            callback: () => {}
        })

        WA.controls.disablePlayerControls()
        setTimeout(
            () => {
                WA.controls.restorePlayerControls()
            }, 
            1000
        )
    })
}

export function initShit(tilesets: Awaited<ReturnType<typeof findTilesId>>){

    WA.ui.actionBar.addButton({
        id: "shit",
        label: "Lâcher une caisse ! 💨",
        callback: async () => {
            WA.event.broadcast("motions", {
                playerId: WA.player.playerId,
                motionName: "fart",
                attackerId: WA.player.playerId
            });

            if(Math.random() < 0.2){
                const pos = await WA.player.getPosition()
                const x = Math.ceil(pos.x/32)
                const y = Math.ceil(pos.y/32)

                const shitFound = (WA.state.shits as any).find((s: any) => s.x === x && s.y === y);
                if(shitFound){
                    return;
                }

                WA.state.saveVariable("shits", [
                    ...WA.state.shits as any, 
                    {
                        ownerName: WA.player.name,
                        x,
                        y,
                        id: Date.now(),
                    }
                ])
            }
        }
    });

    (WA.state.shits as Shit[]).forEach(async shit => {
        createShit(tilesets, shit)
    })

    WA.state.onVariableChange("shits").subscribe(async(shits: any) => {
        const shit = shits[shits.length - 1]
        if(!shit){
            return
        }
        try{
            await WA.room.area.get(`shit-${shit.id}`)
            return
        } catch {}

        createShit(tilesets, shit);
    })
}