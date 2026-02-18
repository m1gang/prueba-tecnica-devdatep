import { dbApi } from "../api/db.api.JS";

export const getCharactersAction = async (
    page, limit = 5
) => {
    if (isNaN(page)) {
        page = 1
    }
    if (isNaN(limit)) {
        page = 8
    }

    const { data } = await dbApi.get('/api/characters', {
        params: {
            limit: limit,
            page: page
        }
    });


    // const sortedData = [...data.items].sort((a, b) => {
    //     if (a.name > b.name) return 1;
    //     if (a.name < b.name) return -1;
    //     return 0
    // })


    // return sortedData;
    return data;
}