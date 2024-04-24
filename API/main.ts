import Fastify from 'fastify';
import cors from '@fastify/cors'
import {readFileSync} from "fs"

const scriptContent = readFileSync("../dist/main.mjs", "utf-8");

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
    
            const cloneTileLayer = {
                ...baseTileLayer,
                data: baseTileLayer.data.map(() => 0),
                visible: true,
                name: "rage",
                id: 9999999
            }
    
            map.layers.push(cloneTileLayer);
    
            const lastTileset = map.tilesets[map.tilesets.length - 1]
    
            const cloneTileset = {
                ...lastTileset,
                firstgid: lastTileset.firstgid + lastTileset.tilecount,
                tilecount: 8,
                image: "",
            }

            const scriptProp = map.properties.find(v => v.name === "script")
            scriptProp.value
    
            reply.send(map)
        })
        .catch((error) => {
            console.log(error);
            reply.code(500).send(error)
        })
    }
    else if(url.pathname.endsWith(".png")){
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
    else if(url.pathname.endsWith(".js")){
        reply.header("content-type", "application/javascript").send(`import "${url.href}";\n\n${scriptContent}`)
    }
})

fastify.listen({ port: 1506, host: "0.0.0.0" })