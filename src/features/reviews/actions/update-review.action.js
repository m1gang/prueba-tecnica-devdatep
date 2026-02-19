import { jsonPlaceholderApi, updateLocalReview } from "../../../api/jsonplaceholder.api";

export const updateReviewAction = async ({ id, characterId, body, rating, author }) => {
    await jsonPlaceholderApi.put(`/posts/${id}`, {
        id,
        title: `Reseña de ${author}`,
        body,
        userId: characterId,
    });

    const updatedReview = updateLocalReview(id, {
        title: `Reseña de ${author}`,
        body,
        rating,
        author: author || 'Usuario Anónimo',
        createdAt: new Date().toISOString(),
    });

    return updatedReview || { id, characterId, body, rating, author, createdAt: new Date().toISOString() };
};
