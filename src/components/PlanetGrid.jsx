import { PlanetCard } from "./PlanetCard";

export const PlanetGrid = ({ planets }) => {
    return (
        <div className="font-display grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {planets?.map((planet) => (
                <PlanetCard key={planet.id} planet={planet} />
            ))}
        </div>
    );
};

