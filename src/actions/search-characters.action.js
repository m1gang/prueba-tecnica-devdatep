import { dbApi } from "../api/db.api.JS"


export const searchCharacterAction = async (name) => {

    const { data } = await dbApi.get('/api/characters', {
        params: {
            name
        }
    })

    const sortedData = [...data].sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0
    })


    return sortedData;
}