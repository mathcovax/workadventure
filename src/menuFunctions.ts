import type {RemotePlayerInterface} from "@workadventure/iframe-api-typings"

interface Action {
    name: string
    callback: (remotePlayer: RemotePlayerInterface) => void
}

export const actions: Action[] = [
    {
        name: 'Brûler!', 
        callback: (remotePlayer) => {
            
        }
    },
    {
        name: 'Piano piano!',
        callback: (remotePlayer) => {

        }
    },
    {
        name: 'Enclume!',
        callback: (remotePlayer) => {
            
        }
    }

]


