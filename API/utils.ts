import * as fs from "node:fs";
import * as path from "node:path";

export function animatedTileset(initialTileset) {
    let nextFirstGid: number = initialTileset.firstgid + initialTileset.tilecount;
    let tilesets = [];
let tiles = fs.readdirSync(path.join(__dirname, "tiles"));
    tiles.forEach(file => {
        const filePath = path.join(__dirname, "tiles", file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            tilesets = tilesets.concat(animatedTileset(initialTileset));
        } else if (stats.isFile() && path.extname(file) === '.json') {
            try {
                let fileContents = fs.readFileSync(filePath, { encoding: 'utf-8' });
                let tileset = JSON.parse(fileContents);
                tileset.firstgid = nextFirstGid;
                tilesets.push(tileset);
                nextFirstGid += tileset.tilecount;
            } catch (error) {
                console.error(`Error processing file ${file}:`, error);
            }
        }
    });

    return tilesets;
}
