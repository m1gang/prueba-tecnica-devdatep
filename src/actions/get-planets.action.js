import { dbApi } from "../api/db.api";

export const getPlanetsAction = async (page, limit) => {
    if (isNaN(page)) {
        page = 1
    }
    if (isNaN(limit)) {
        page = 8
    }

    const { data } = await dbApi.get('/api/planets', {
        params: {
            limit: limit,
            page: page
        }
    }

    );

    return data;
}