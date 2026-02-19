import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReviewAction } from '../actions/create-review.action';
import { useToast } from '../../../hooks/useToast';

export const useCreateReview = () => {
    const queryClient = useQueryClient();
    const { showSuccess, showError } = useToast();

    return useMutation({
        mutationFn: createReviewAction,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ 
                queryKey: ['reviews', variables.characterId] 
            });
            showSuccess('Reseña creada exitosamente');
        },
        onError: (error) => {
            showError(error.message || 'Error al crear la reseña');
        },
    });
};
