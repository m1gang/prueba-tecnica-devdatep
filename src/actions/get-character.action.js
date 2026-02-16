import { dbApi } from "../api/db.api.JS";



export const getCharacterAction = async (idSlug) => {

    const { data } = await dbApi.get(`/api/characters/${idSlug}`);

    return data
}