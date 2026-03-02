import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ReviewCard } from './ReviewCard';

const ReviewCardSkeleton = () => (
    <div className="bg-white dark:bg-neutral-800/40 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-4">
            <Skeleton circle width={48} height={48} />
            <div>
                <Skeleton width={120} height={16} />
                <Skeleton width={100} height={12} className="mt-1" />
            </div>
        </div>
        <Skeleton count={2} className="mt-4" />
    </div>
);

export const ReviewList = ({ reviews, isLoading, onEdit, onDelete }) => {
    if (isLoading) {
        return (
            <div className="flex flex-col gap-2">
                {[...Array(3)].map((_, i) => (
                    <ReviewCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    if (!reviews || reviews.length === 0) {
        return (
            <div className="text-center py-12 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl">
                <span className="material-icons text-4xl text-neutral-400 mb-2">rate_review</span>
                <p className="text-neutral-500">
                    Aún no hay reseñas. ¡Sé el primero en escribir una!
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            {reviews.map((review) => (
                <ReviewCard 
                    key={review.id} 
                    review={review} 
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};
