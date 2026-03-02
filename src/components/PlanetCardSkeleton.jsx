import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PlanetCardSkeleton = () => {
    return (
        <div className="bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800">
            <div className="aspect-4/5 w-full">
                <Skeleton height="100%" />
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div className="w-full mr-4">
                        <Skeleton height={24} width="70%" />
                    </div>
                    <Skeleton circle width={32} height={32} />
                </div>
            </div>
        </div>
    );
};
