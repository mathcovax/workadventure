/// <reference types="@workadventure/iframe-api-typings" />

import rageMode from "workadventure-rage-mode";

// Waiting for the API to be ready
WA.onInit().then(() => {
    rageMode(WA);

}).catch(e => console.error(e));

export {};
