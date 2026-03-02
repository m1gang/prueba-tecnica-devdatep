import { jsonPlaceholderApi, saveLocalReview } from "../../../api/jsonplaceholder.api";

export const createReviewAction = async ({ characterId, body, rating, author }) => {
    await jsonPlaceholderApi.post('/posts', {
        title: `Reseña de ${author}`,
        body,
        userId: characterId,
    });

    const newReview = {
        id: Date.now(),
        title: `Reseña de ${author}`,
        body,
        characterId,
        rating,
        author: author || 'Usuario Anónimo',
        createdAt: new Date().toISOString(),
        isLocal: true,
    };

    saveLocalReview(newReview);

    return newReview;
};
