import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCharacterAction } from "../actions/get-character.action";
import { useParams } from "react-router";
import { raceStyles } from "../utils/raceStyles";

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

    const styles = raceStyles[character.race] || raceStyles["Saiyan"];

    return (
        <>
            <div className="grid lg:grid-cols-2">
                <div className="flex justify-center items-center ">
                    <img className="h-screen" src={character.image} alt={character.image} />
                </div>
                <div className="flex flex-col justify-center ">
                    <div className="flex gap-5">
                        <div className={`${styles.bgSolid} w-1 h-full rounded-md`} />

                        <div>
                            <span className={`${styles.bgTransparent} flex justify-center w-50 font-archivo p-1 rounded-md ${styles.textSolid}`}>{character.race}</span>
                            <h1 className={`${styles.text} text-8xl font-clash font-black text-gray-900 dark:text-white  transition-colors`}>{character.name}</h1>
                            <p className="flex items-cente gap-2">
                                <div className={`w-6 h-6  rounded-lg flex items-center justify-center text-white/70`}>
                                    <span className="material-icons text-2xl">public</span>
                                </div>
                                <p className="text-white/70">Planeta {character.originPlanet.name}</p>
                            </p>
                        </div>
                    </div>


                    <p>{character.description}</p>
                    <p>{character.race}</p>
                    <p>{character.ki}</p>
                    <p>{character.originPlanet.name}</p>
                    <img src={character.originPlanet.image} alt={character.originPlanet.name} width={200} />
                </div>
            </div>


        </>
    );
};
