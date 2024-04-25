//@ts-nocheck
interface Tileset {
    columns: number,
    image: string,
    imageheight: number,
    imagewidth: number,
    margin: number,
    name: string,
    spacing: number,
    tilecount: number,
    tileheight: number,
    tilewidth: number,
    firstgid: number
}

export async function loadSounds(){
    const fart = await WA.sound.loadSound("_assets_/fart.mp3")

    if(!fart){
        throw new Error("sound not found")
    }

    return {
        fart
    }

}

export async function findTilesId(){
    const map = await WA.room.getTiledMap()

    const piano: Tileset = map.tilesets.find(tileset => tileset.name === "piano")
    const _void: Tileset = map.tilesets.find(tileset => tileset.name === "void")
    const explosion: Tileset = map.tilesets.find(tileset => tileset.name === "explosion")
    const lightning: Tileset = map.tilesets.find(tileset => tileset.name === "lightning")
    const punchMachine: Tileset = map.tilesets.find(tileset => tileset.name === "punch_machine")
    const fireball: Tileset = map.tilesets.find(tileset => tileset.name === "fireball")
    const anvil: Tileset = map.tilesets.find(tileset => tileset.name === "anvil")
    const fartOn: Tileset = map.tilesets.find(tileset => tileset.name === "fart_on")
    const car: Tileset = map.tilesets.find(tileset => tileset.name === "car")
    const fart: Tileset = map.tilesets.find(tileset => tileset.name === "fart")
    
    if(
        !piano || 
        !_void || 
        !explosion || 
        !lightning || 
        !punchMachine ||
        !anvil ||
        !fireball ||
        !fartOn ||
        !fart
    ){
        throw new Error("tileset not found");
    }

    return {
        piano,
        void: _void,
        explosion,
        lightning,
        punchMachine,
        fireball,
        anvil,
        fartOn,
        car,
        fart
    }
}