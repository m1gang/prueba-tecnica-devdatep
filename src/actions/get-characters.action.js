import { dbApi } from "../api/db.api.JS";

export const getCharactersAction = async () => {
    const { data } = await dbApi.get('/api/characters?page=1&limit=50');


    const sortedData = [...data.items].sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0
    })


    return sortedData;
}