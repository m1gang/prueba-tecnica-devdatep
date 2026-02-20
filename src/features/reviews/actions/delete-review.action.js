import { jsonPlaceholderApi, deleteLocalReview, getLocalReviews } from "../../../api/jsonplaceholder.api";

export const deleteReviewAction = async (id) => {
    const localReviews = getLocalReviews();
    const isLocalReview = localReviews.some(r => r.id === id);

    if (!isLocalReview) {
        try {
            await jsonPlaceholderApi.delete(`/posts/${id}`);
        } catch {
            console.log('API delete simulated');
        }
    }

    deleteLocalReview(id);

    return id;
};
