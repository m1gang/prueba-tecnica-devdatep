import {
    jsonPlaceholderApi,
    getLocalReviews,
    getDeletedIds
} from "../../../api/jsonplaceholder.api";

export const getReviewsAction = async (characterId) => {
    if (!characterId) return [];

    const { data: apiPosts } = await jsonPlaceholderApi.get('/posts', {
        params: { userId: characterId }
    });

    const deletedIds = getDeletedIds();

    const localReviews = getLocalReviews()
        .filter(r => r.characterId === characterId && !deletedIds.includes(r.id));

    const apiReviews = apiPosts
        .filter(post => !deletedIds.includes(post.id))
        .map(post => ({
            id: post.id,
            title: post.title,
            body: post.body,
            characterId: post.userId,
            rating: Math.floor(Math.random() * 5) + 1,
            author: 'Usuario Anónimo',
            isLocal: false,
        }));

    const allReviews = [...localReviews, ...apiReviews];

    return allReviews.sort((a, b) => b.id - a.id);
};
