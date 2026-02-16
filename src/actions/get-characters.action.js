import { dbApi } from "../api/db.api.JS";

export const getCharactersAction = async () => {
    const { data } = await dbApi.get('/api/characters?page=1&limit=58');

    return data.items;
}