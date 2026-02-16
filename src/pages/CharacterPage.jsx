import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCharacterAction } from "../actions/get-character.action";
import { useParams } from "react-router";

export const CharacterPage = () => {
    const { id = "" } = useParams();

    const { data: character } = useQuery({
        queryKey: ["character", id],
        queryFn: () => getCharacterAction(id),
        staleTime: 1000 * 60 * 5,
    });

    console.log(character);
    if (!character) {
        return <span>Cargando ...</span>;
    }

    return (
        <>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.image} width={200} />
            <p>{character.description}</p>
            <p>{character.race}</p>
            <p>{character.ki}</p>
            <p>{character.originPlanet.name}</p>
            <img src={character.originPlanet.image} alt={character.originPlanet.name} width={200} />

        </>
    );
};
