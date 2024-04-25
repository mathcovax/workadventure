import pianoTile from "./tiles/piano.tile";
import voidTile from "./tiles/void.tile";
import explosionTile from "./tiles/explosion.tile";
import lightningTile from "./tiles/lightning.tile";
import punchMachineTile from "./tiles/punch_machine.tile";
import fireballTile from "./tiles/fireball.tile";
import anvilTile from "./tiles/anvil.tile";
import fartOnTile from "./tiles/fart_on.tile";
import carTile from "./tiles/car.tile";

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
        {
            ...lightningTile,
            firstgid: firstgid += explosionTile.tilecount,
        },
        {
            ...punchMachineTile,
            firstgid: firstgid += lightningTile.tilecount,
        },
        {
            ...fireballTile,
            firstgid: firstgid += punchMachineTile.tilecount
        },
        {
            ...anvilTile,
            firstgid: firstgid += fireballTile.tilecount,
        },
        {
            ...fartOnTile,
            firstgid: firstgid += anvilTile.tilecount,
        },
        {
            ...carTile,
            firstgid: firstgid += carTile.tilecount,
        },
    ]
}