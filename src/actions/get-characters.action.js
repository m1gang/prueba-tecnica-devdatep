import { dbApi } from "../api/db.api.JS";

export const getCharactersAction = async (
    page, limit
) => {
    if (isNaN(page)) {
        page = 1
    }
    if (isNaN(limit)) {
        limit = 8
    }

    const { data } = await dbApi.get('/api/characters', {
        params: {
            limit: limit,
            page: page
        }
    });

    const items = data?.items || [];

    const sortedData = [...items].sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0
    })

    // Hacemos fetch de todos los datos para el calculo de todas las razas y afiliaciones
    const { data: allData } = await dbApi.get('/api/characters', {
        params: { limit: 1000 }
    });
    const allItems = allData?.items || [];

    const { meta: originalMeta } = data;

    // Calculamos el total de razas y afiliaciones
    const totalItems = originalMeta.totalItems;
    const totalRaces = new Set(allItems.map(char => char.race)).size;
    const totalAffiliations = new Set(allItems.map(char => char.affiliation)).size;

    const meta = {
        ...originalMeta,
        totalItems,
        totalRaces,
        totalAffiliations
    };

    return {
        sortedData,
        meta
    };
}