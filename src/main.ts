/// <reference types="@workadventure/iframe-api-typings" />

import type {RemotePlayerInterface} from "@workadventure/iframe-api-typings"
import {actions} from "./interactMenu";
import { findTilesId } from "./findTileset";
import { subscribeMotion } from "./motions";
import { initShit } from "./shit";

WA.onInit().then(async () => {
    WA.controls.disablePlayerControls()
    const tilesId = await findTilesId();
    if(WA.state.shits === 0){
        await WA.state.saveVariable("shits", [])
    }
    await WA.players.configureTracking();
    WA.controls.restorePlayerControls()

    WA.ui.onRemotePlayerClicked.subscribe((remotePlayer: RemotePlayerInterface) => {
        actions.forEach(action => {
            remotePlayer.addAction(action.name, () => action.callback(remotePlayer, tilesId))
        })
    });

    WA.event.on("motions").subscribe(({data}) => subscribeMotion(data as any, tilesId))

    WA.ui.actionBar.addButton({
        id: "eee",
        label: "laché une quaise",
        callback: async () => {
            WA.event.broadcast("motions", {
                playerId: WA.player.playerId,
                motionName: "fart",
                attackerId: WA.player.playerId
            });

            if(Math.random() > 0.2){
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
    })

    initShit(tilesId)
}).catch(e => console.error(e));

    