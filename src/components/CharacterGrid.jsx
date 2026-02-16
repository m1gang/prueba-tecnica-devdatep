import { CharacterCardSkeleton } from "./CharacterCardSkeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import { CharacterCard } from "./CharacterCard"

export const CharacterGrid = ({ characters, isLoading }) => {
  if (isLoading) {
    return (
      <div className="font-display grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <CharacterCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="font-display grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {characters?.map((character) => (
        <CharacterCard key={character.id} character={character} />

      ))}
    </div>
  );
};
