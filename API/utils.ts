import pianoTile from "./tiles/piano.tile";
import voidTile from "./tiles/void.tile";
import explosionTile from "./tiles/explosion.tile";

export function animatedTileset(tileset){
    let firstgid = tileset.firstgid + tileset.tilecount
    return [
        {
            ...pianoTile,
            firstgid,
        },
        {
            ...voidTile,
            firstgid: firstgid += pianoTile.tilecount,
        },
        {
            ...explosionTile,
            firstgid: firstgid += voidTile.tilecount,
        },
    ]
}