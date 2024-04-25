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

export async function findTilesId(){
    const map = await WA.room.getTiledMap()

    const piano: Tileset = map.tilesets.find(tileset => tileset.name === "piano")
    const _void: Tileset = map.tilesets.find(tileset => tileset.name === "void")
    const explosion: Tileset = map.tilesets.find(tileset => tileset.name === "explosion")
    const lightning: Tileset = map.tilesets.find(tileset => tileset.name === "lightning")
    const punchMachine: Tileset = map.tilesets.find(tileset => tileset.name === "punch_machine")
    const fireball: Tileset = map.tilesets.find(tileset => tileset.name === "fireball")
    const enclume: Tileset = map.tilesets.find(tileset => tileset.name === "enclume")

    if(!piano || !_void || !explosion || !lightning || !punchMachine || !fireball || !enclume){
        throw new Error("tileId not found");
    }

    return {
        piano,
        void: _void,
        explosion,
        lightning,
        punchMachine,
        fireball,
        enclume
    }
}