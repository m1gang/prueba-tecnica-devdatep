import { PlanetCard } from "./PlanetCard";
import { PlanetCardSkeleton } from "./PlanetCardSkeleton";

export const PlanetGrid = ({ planets, isLoading }) => {
    if (isLoading) {
        return (
            <div className="font-display grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                    <PlanetCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    return (
        <div className="font-display grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {planets?.map((planet) => (
                <PlanetCard key={planet.id} planet={planet} />
            ))}
        </div>
    );
};
