import { jsonPlaceholderApi, deleteLocalReview } from "../../../api/jsonplaceholder.api";

export const deleteReviewAction = async (id) => {
    await jsonPlaceholderApi.delete(`/posts/${id}`);
    
    deleteLocalReview(id);
    
    return id;
};
