import { useState } from 'react';
import { useReviews } from '../hooks/useReviews';
import { useCreateReview } from '../hooks/useCreateReview';
import { useUpdateReview } from '../hooks/useUpdateReview';
import { useDeleteReview } from '../hooks/useDeleteReview';
import { ReviewList } from './ReviewList';
import { ReviewForm } from './ReviewForm';

export const ReviewSection = ({ characterId }) => {
    const [showForm, setShowForm] = useState(false);
    const [editingReview, setEditingReview] = useState(null);

    const { data: reviews, isLoading } = useReviews(characterId);
    const createReview = useCreateReview();
    const updateReview = useUpdateReview();
    const deleteReview = useDeleteReview();

    const handleCreate = async (data) => {
        await createReview.mutateAsync({
            ...data,
            characterId: Number(characterId),
        });
        setShowForm(false);
    };

    const handleUpdate = async (data) => {
        if (!editingReview) return;
        await updateReview.mutateAsync({
            ...data,
            id: editingReview.id,
            characterId: Number(characterId),
        });
        setEditingReview(null);
        setShowForm(false);
    };

    const handleDelete = async (reviewId) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta reseña?')) {
            await deleteReview.mutateAsync({
                id: reviewId,
                characterId: Number(characterId),
            });
        }
    };

    const handleEdit = (review) => {
        setEditingReview(review);
        setShowForm(true);
    };

    const handleCancel = () => {
        setShowForm(false);
        setEditingReview(null);
    };

    return (
        <section className="border-t border-neutral-200 dark:border-neutral-800 pt-10">
            <div className="flex items-center gap-3 mb-8">
                <h3 className="text-2xl font-display font-black text-neutral-900 dark:text-white uppercase tracking-tight">
                    Reseñas del personaje
                </h3>
                <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"></div>
            </div>

            {showForm ? (
                <ReviewForm
                    onSubmit={editingReview ? handleUpdate : handleCreate}
                    onCancel={handleCancel}
                    defaultValues={editingReview ? {
                        author: editingReview.author,
                        body: editingReview.body,
                        rating: editingReview.rating,
                    } : undefined}
                    isEditing={!!editingReview}
                />
            ) : (
                <button
                    onClick={() => setShowForm(true)}
                    className="mb-6 flex items-center gap-2 text-primary hover:text-orange-600 font-semibold transition-colors"
                >
                    <span className="material-icons">add</span>
                    Escribir una reseña
                </button>
            )}

            <ReviewList
                reviews={reviews}
                isLoading={isLoading}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </section>
    );
};
