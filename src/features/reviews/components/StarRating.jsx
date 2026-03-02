export const StarRating = ({ rating, onChange, size = 'sm' }) => {
    const sizes = {
        sm: 'text-xs',
        md: 'text-base',
        lg: 'text-xl',
    };

    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    onClick={() => onChange?.(star)}
                    disabled={!onChange}
                    className={`${onChange ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
                >
                    <span 
                        className={`material-icons ${sizes[size]} ${
                            star <= rating 
                                ? 'text-primary' 
                                : 'text-neutral-300 dark:text-neutral-700'
                        }`}
                    >
                        star
                    </span>
                </button>
            ))}
        </div>
    );
};
