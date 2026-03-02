import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reviewWithAuthorSchema } from '../../../validations/reviewSchema';
import { StarRating } from './StarRating';

export const ReviewForm = ({ onSubmit, onCancel, defaultValues, isEditing = false }) => {
    const [rating, setRating] = useState(defaultValues?.rating || 0);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(reviewWithAuthorSchema),
        defaultValues: {
            author: '',
            body: '',
            rating: 0,
            ...defaultValues,
        },
    });

    const handleRatingChange = (value) => {
        setRating(value);
        setValue('rating', value);
    };

    const handleFormSubmit = (data) => {
        onSubmit({ ...data, rating });
        if (!isEditing) {
            reset();
            setRating(0);
        }
    };

    const handleCancel = () => {
        reset();
        setRating(0);
        onCancel?.();
    };

    return (
        <div className="bg-white dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 mb-10">
            <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">
                {isEditing ? 'Editar Reseña' : 'Escribe una Reseña'}
            </h4>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm text-neutral-500 mr-2">Rating:</label>
                    <StarRating rating={rating} onChange={handleRatingChange} />
                    {errors.rating && (
                        <span className="text-red-500 text-xs ml-2">{errors.rating.message}</span>
                    )}
                </div>

                <div>
                    <input
                        {...register('author')}
                        className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary placeholder-neutral-500"
                        placeholder="Escribe tu nombre de usuario"
                    />
                    {errors.author && (
                        <p className="text-red-500 text-xs mt-1">{errors.author.message}</p>
                    )}
                </div>

                <div>
                    <textarea
                        {...register('body')}
                        className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary placeholder-neutral-500 min-h-25"
                        placeholder="Comparte lo que pienses del personaje..."
                    />
                    {errors.body && (
                        <p className="text-red-500 text-xs mt-1">{errors.body.message}</p>
                    )}
                </div>

                <div className="flex justify-end gap-3">
                    {onCancel && (
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                        >
                            Cancelar
                        </button>
                    )}
                    <button
                        type="submit"
                        className="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-primary/20"
                    >
                        {isEditing ? 'Actualizar' : 'Reseña'}
                    </button>
                </div>
            </form>
        </div>
    );
};
