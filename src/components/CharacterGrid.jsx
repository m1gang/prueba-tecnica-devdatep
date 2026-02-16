import React from "react";
import { CharacterCard } from "./CharacterCard";

export const CharacterGrid = ({ characters }) => {
  return (
    <div className="font-display grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {characters.map((character) => (
        <CharacterCard character={character} />
      ))}
    </div>
  );
};
