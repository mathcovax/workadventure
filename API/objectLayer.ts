export const objectLayer = {
    id: 9999999,
    name: "rage_var",
    opacity: 1,
    type: "objectgroup",
    visible: true,
    x: 0,
    y: 0,
    objects: [
        {
            height: 0,
            id: 1,
            name: "shits",
            properties:[
                    {
                        name: "default",
                        type:"object",
                        value:0
                    },
                    {
                        name:"readableBy",
                        type:"object",
                        value:"admin"
                    }, 
                    {
                        name:"writableBy",
                        type:"object",
                        value:"admin"
                    }
            ],
            rotation:0,
            type: "variable",
            visible:true,
            width: 0,
            x: 0,
            y: 0
        },
        {
            height: 0,
            id: 1,
            name: "doomMode",
            properties:[
                    {
                        name: "default",
                        type:"boolean",
                        value:false
                    },
                    {
                        name:"readableBy",
                        type:"object",
                        value:"admin"
                    }, 
                    {
                        name:"writableBy",
                        type:"object",
                        value:"admin"
                    }
            ],
            rotation:0,
            type: "variable",
            visible:true,
            width: 0,
            x: 0,
            y: 0
        }, 
    ]
}