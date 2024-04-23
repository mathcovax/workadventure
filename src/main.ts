import type {WorkAdventureApi} from "@workadventure/iframe-api-typings"

export default async function rageMode(
    wa: WorkAdventureApi,
){
    wa.room.setTiles([{x: 10, y: 10, tile: 2956, layer: "start1"}])
}