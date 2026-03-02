import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateReviewAction } from '../actions/update-review.action';
import { useToast } from '../../../hooks/useToast';

export const useUpdateReview = () => {
    const queryClient = useQueryClient();
    const { showSuccess, showError } = useToast();

    return useMutation({
        mutationFn: updateReviewAction,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ 
                queryKey: ['reviews', variables.characterId] 
            });
            showSuccess('Reseña actualizada correctamente');
        },
        onError: (error) => {
            showError(error.message || 'Error al actualizar la reseña');
        },
    });
};
