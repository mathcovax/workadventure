import pianoTile from "./tiles/piano.tile";

export function animatedTileset(tileset){
    return [
        {
            ...pianoTile,
            firstgid: tileset.firstgid + tileset.tilecount,
        }
    ]
}