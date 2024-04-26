import { findTilesId } from "./findTileset";

function autoLightning(){
    const interval = setInterval(async () => {
        if(!WA.state.doomMode){
            clearInterval(interval)
            return
        }

        let {x, y} = await WA.player.getPosition();
        x = x/32;
        y = y/32;

        const maxX = x + 5 
        const minX = x - 5

        const maxY = y + 5
        const minY = y - 5

        const lightningX = Math.floor(Math.random() * (maxX - minX + 1) + minX)
        const lightningY = Math.floor(Math.random() * (maxY - minY + 1) + minY)

        WA.event.broadcast("doomLightning", {x: lightningX, y: lightningY})
    }, 1000)
}

export function initDoomMode(tilesId: Awaited<ReturnType<typeof findTilesId>>,) {
    WA.ui.actionBar.addButton({
        id: "doom",
        label: "Doom mode 👹",
        callback: () => {
            if (WA.state.doomMode === true) {
                WA.state.saveVariable("doomMode", false);
            } else {
                WA.state.saveVariable("doomMode", true);
            }
        }
    })

    WA.event.on("doomLightning").subscribe(({data: {x, y}}: any) => {
        WA.room.setTiles([
            {x, y, tile: tilesId.lightning.firstgid, layer: "rage"}
        ])

        setTimeout(
            () => {
                WA.room.setTiles([
                    {x, y, tile: tilesId.void.firstgid, layer: "rage"}
                ])
            }, 
            1500
        )
    })

    WA.state.onVariableChange("doomMode").subscribe((value) => {
        if(value){
            WA.room.showLayer("doom");
            autoLightning()
        }
        else {
            WA.room.hideLayer("doom");  
        }
    })

    if(WA.state.doomMode){
        autoLightning()
        WA.room.showLayer("doom");
    }
}