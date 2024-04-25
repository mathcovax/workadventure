/// <reference types="@workadventure/iframe-api-typings" />

import type {RemotePlayerInterface} from "@workadventure/iframe-api-typings"
import {actions} from "./interactMenu";
import { findTilesId } from "./findTilesId";
import { subscribeMotion } from "./motions";

WA.onInit().then(async () => {
    const tilesId = await findTilesId(); 
    await WA.players.configureTracking();

    WA.ui.onRemotePlayerClicked.subscribe((remotePlayer: RemotePlayerInterface) => {
        actions.forEach(action => {
            remotePlayer.addAction(action.name, () => action.callback(remotePlayer, tilesId))
        })
    });

    WA.event.on("motions").subscribe(({data}) => subscribeMotion(data as any, tilesId))
}).catch(e => console.error(e));

    