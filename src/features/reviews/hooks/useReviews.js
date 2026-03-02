import { useQuery } from '@tanstack/react-query';
import { getReviewsAction } from '../actions/get-reviews.action';

export const useReviews = (characterId) => {
    return useQuery({
        queryKey: ['reviews', characterId],
        queryFn: () => getReviewsAction(characterId),
        staleTime: 1000 * 60 * 5,
        enabled: !!characterId,
    });
};
