import axios from 'axios';

export const jsonPlaceholderApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});

jsonPlaceholderApi.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message || error.message || 'Error desconocido';
        return Promise.reject(new Error(message));
    }
);

const STORAGE_KEY = 'db_reviews';
const DELETED_KEY = 'db_reviews_deleted';
const UPDATED_KEY = 'db_reviews_updated';

export const getLocalReviews = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
        return [];
    }
};

export const saveLocalReview = (review) => {
    const reviews = getLocalReviews();
    reviews.push(review);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    return review;
};

export const updateLocalReview = (id, updates) => {
    const reviews = getLocalReviews();
    const index = reviews.findIndex(r => r.id === id);
    
    if (index !== -1) {
        reviews[index] = { ...reviews[index], ...updates };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
        return reviews[index];
    }
    
    const updatedReviews = getUpdatedReviews();
    updatedReviews[id] = updates;
    localStorage.setItem(UPDATED_KEY, JSON.stringify(updatedReviews));
    
    return null;
};

export const getUpdatedReviews = () => {
    try {
        return JSON.parse(localStorage.getItem(UPDATED_KEY) || '{}');
    } catch {
        return {};
    }
};

export const deleteLocalReview = (id) => {
    const reviews = getLocalReviews();
    const filtered = reviews.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));

    const deleted = JSON.parse(localStorage.getItem(DELETED_KEY) || '[]');
    if (!deleted.includes(id)) {
        deleted.push(id);
        localStorage.setItem(DELETED_KEY, JSON.stringify(deleted));
    }
    
    const updatedReviews = getUpdatedReviews();
    delete updatedReviews[id];
    localStorage.setItem(UPDATED_KEY, JSON.stringify(updatedReviews));
};

export const getDeletedIds = () => {
    try {
        return JSON.parse(localStorage.getItem(DELETED_KEY) || '[]');
    } catch {
        return [];
    }
};

export const clearDeletedIds = () => {
    localStorage.removeItem(DELETED_KEY);
};
