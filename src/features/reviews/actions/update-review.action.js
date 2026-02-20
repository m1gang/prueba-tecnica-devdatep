import { jsonPlaceholderApi, updateLocalReview, getLocalReviews } from "../../../api/jsonplaceholder.api";

export const updateReviewAction = async ({ id, characterId, body, rating, author }) => {
    const localReviews = getLocalReviews();
    const isLocalReview = localReviews.some(r => r.id === id);
    
    const updateData = {
        title: `Reseña de ${author}`,
        body,
        rating,
        author: author || 'Usuario Anónimo',
        createdAt: new Date().toISOString(),
    };

    if (isLocalReview) {
        const updated = updateLocalReview(id, updateData);
        return updated;
    }

    try {
        await jsonPlaceholderApi.put(`/posts/${id}`, {
            id,
            title: `Reseña de ${author}`,
            body,
            userId: characterId,
        });
    } catch {
        console.log('API update simulated, using local storage');
    }

    updateLocalReview(id, updateData);

    return { id, characterId, ...updateData };
};
