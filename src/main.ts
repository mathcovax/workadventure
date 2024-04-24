/// <reference types="@workadventure/iframe-api-typings" />

WA.onInit().then(async () => {
    const map = await WA.room.getTiledMap()
    
    console.log(map);
    
    const pianoTileset = map.tilesets.find(t => t.name === "piano_tileset")
    
    const {firstgid} = pianoTileset;

    WA.room.setTiles([
        {x: 0, y: 0, tile: firstgid, layer: "rage"}
    ])
}).catch(e => console.error(e));