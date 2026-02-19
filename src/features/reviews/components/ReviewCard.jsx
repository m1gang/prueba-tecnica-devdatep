import { StarRating } from './StarRating';

const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    const diffWeeks = Math.floor(diffDays / 7);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`;
};

export const ReviewCard = ({ review, onEdit, onDelete }) => {
    const { body, author, rating, createdAt } = review;

    return (
        <div className="group relative bg-white dark:bg-neutral-800/40 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-primary/30 transition-all">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                        <span className="material-icons text-neutral-400">person</span>
                    </div>
                    <div>
                        <h5 className="font-bold text-neutral-900 dark:text-neutral-100">
                            {author}
                        </h5>
                        <div className="flex items-center gap-2 mt-0.5">
                            <StarRating rating={rating} />
                            <span className="text-[10px] text-neutral-500 uppercase ml-2 tracking-tighter">
                                {getRelativeTime(createdAt)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                        onClick={() => onEdit?.(review)}
                        className="p-2 text-neutral-400 hover:text-primary transition-colors"
                    >
                        <span className="material-icons text-sm">edit</span>
                    </button>
                    <button 
                        onClick={() => onDelete?.(review.id)}
                        className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                    >
                        <span className="material-icons text-sm">delete</span>
                    </button>
                </div>
            </div>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {body}
            </p>
        </div>
    );
};
