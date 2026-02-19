import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteReviewAction } from '../actions/delete-review.action';
import { useToast } from '../../../hooks/useToast';

export const useDeleteReview = () => {
    const queryClient = useQueryClient();
    const { showSuccess, showError } = useToast();

    return useMutation({
        mutationFn: ({ id }) => deleteReviewAction(id),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ 
                queryKey: ['reviews', variables.characterId] 
            });
            showSuccess('Reseña eliminada');
        },
        onError: (error) => {
            showError(error.message || 'Error al eliminar la reseña');
        },
    });
};
