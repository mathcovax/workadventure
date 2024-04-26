import Fastify from 'fastify';
import cors from '@fastify/cors'
import {readFile} from "fs/promises";
import {createReadStream} from "fs";
import { animatedTileset } from './utils';
import { objectLayer } from './objectLayer';

const fastify = Fastify({})

fastify.register(cors, { 
    origin: /[^]*/
})
fastify.get("/*", (request, reply) => {
    const url = new URL(`https://${request.url}`)
    if(url.pathname.endsWith(".tmj")){
        fetch(
            url.href,
            {
                method: "GET",
                headers: {
                    ...request.headers as Record<string, string>,
                    host: url.host
                },
                redirect: "follow",
            }
        )
        .then(response => response.json())
        .then((map) => {
            const baseTileLayer = map.layers.find(v => v.type === "tilelayer");
            if(!baseTileLayer) {
                throw new Error("No base found");
            }

            map.tilesets.push(...animatedTileset(map.tilesets[map.tilesets.length - 1]))
    
            const rageLayer = {
                ...baseTileLayer,
                data: baseTileLayer.data.map(() => 0),
                visible: true,
                name: "rage",
                id: 9999999
            }

            const shitsLayer = {
                ...baseTileLayer,
                data: rageLayer.data,
                visible: true,
                name: "shits",
                id: 9999999
            }

            const lastTileset = map.tilesets[map.tilesets.length - 1];

            const bloodLayer = {
                ...baseTileLayer,
                data: baseTileLayer.data.map(
                    (value, index) => 
                        Math.random() < 0.1 
                        ? lastTileset.firstgid + (index % 4) 
                        : 0
                ),
                visible: false,
                name: "doom",
                id: 9999999
            }

            const floorLayer = map.layers.findIndex(l => l.name === "floorLayer")

            if(floorLayer === -1){
                throw new Error("Floor Layer not found");
            }

            map.layers.splice(floorLayer, 0, bloodLayer, shitsLayer, rageLayer)
            map.layers.push(objectLayer);
            
            const property = map.properties.find(p => p.name === "script");
            
            if(!property) {
                throw new Error("Script property not found");
            }

            property.value = property.value.replace(/\.js$/, "__main-script.js")
            
            reply.send(map)
        })
        .catch((error) => {
            console.log(error);
            reply.code(500).send(error)
        })
    }
    else if(url.pathname.endsWith("__main-script.js")){
        readFile("../dist/main.mjs", "utf-8")
        .then(scriptContent => {
            reply
            .header("content-type", "application/javascript")
            .send(`import "${url.href.replace(/__main-script\.js$/, ".js")}";\n\n${scriptContent}`)
        })
        .catch((error) => {
            console.log(error);
            reply.code(500).send(error)
        })
    }
    else {
        if(url.pathname.includes("/_assets_/")){
            const assetPath = url.pathname.split("/_assets_/")[1];
            
            if(/(\/.\.)|(\.\.\/)/.test(assetPath)){
                reply.code(500).send("bad asset path");
            }
            else {
                const stream = createReadStream(`assets/${assetPath}`)
                reply.code(200).send(stream)
            }
        }
        else {
            fetch(
                url.href,
                {
                    method: "GET",
                    headers: {
                        ...request.headers as Record<string, string>,
                        host: url.host
                    },
                    redirect: "follow",
                }
            )
            .then(response => {
                const headers = {};
                response.headers.forEach((value, key) => {
                    headers[key] = value;
                });
        
                reply.raw.writeHead(response.status, headers)
        
                const reader = response.body?.getReader()
                if(reader){
                    reader.read().then(function pump({done, value}){
                        if(value){
                            reply.raw.write(value);
                        }
            
                        if(!done){
                            reader.read().then(pump);
                        }
                        else {
                            reply.raw.end();
                        }
                    })
                }
                else {
                    reply.raw.end();
                }
        
            })
            .catch((error) => {
                console.log(error);
                reply.code(500).send(error)
            })
        }
    }
})

fastify.listen({ port: 1506, host: "0.0.0.0" })