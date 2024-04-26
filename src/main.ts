/// <reference types="@workadventure/iframe-api-typings" />

import type {RemotePlayerInterface} from "@workadventure/iframe-api-typings"
import {actions} from "./interactMenu";
import { findTilesId } from "./findTileset";
import { subscribeMotion } from "./motions";
import { initShit } from "./shit";
import { initDoomMode } from "./doom";

WA.onInit().then(async () => {
    WA.controls.disablePlayerControls()
    const tilesId = await findTilesId();
    if(WA.state.shits === 0){
        await WA.state.saveVariable("shits", [])
    }
    await WA.players.configureTracking();
    WA.controls.restorePlayerControls();

    WA.ui.onRemotePlayerClicked.subscribe((remotePlayer: RemotePlayerInterface) => {
        actions.forEach(action => {
            remotePlayer.addAction(action.name, () => action.callback(remotePlayer, tilesId))
        })
    });

    WA.event.on("motions").subscribe(({data}) => subscribeMotion(data as any, tilesId))

    initDoomMode(tilesId)

    initShit(tilesId)
}).catch(e => console.error(e));

    