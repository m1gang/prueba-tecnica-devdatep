import { dbApi } from "../api/db.api.JS"


export const searchCharacterAction = async (name) => {

    const { data } = await dbApi.get('/api/characters', {
        params: {
            name
        }
    })

    return data;
}