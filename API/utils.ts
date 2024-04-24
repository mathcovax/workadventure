import pianoTile from "./tiles/piano.tile";

export function animated_tileset(tileset){
    let nextfirstgid = tileset.firstgid + tileset.tilecount;
    return [
        {
            ...pianoTile,
            firstgid: nextfirstgid
        }
    ]
}