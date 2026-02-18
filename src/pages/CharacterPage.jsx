import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCharacterAction } from "../actions/get-character.action";
import { useParams } from "react-router";
import { raceStyles } from "../utils/raceStyles";
import { CharacterPageSkeleton } from "../components/CharacterPageSkeleton";

export const CharacterPage = () => {
    const { id = "" } = useParams();

    const { data: character, isLoading } = useQuery({
        queryKey: ["character", id],
        queryFn: () => getCharacterAction(id),
        staleTime: 1000 * 60 * 5,
    });

    if (isLoading || !character) {
        return <CharacterPageSkeleton />;
    }

    const styles = raceStyles[character.race] || raceStyles["Other"];

    return (
        <>
            <div className="grid lg:grid-cols-2">
                <div className="flex justify-center items-center ">
                    <img
                        className="h-screen"
                        src={character.image}
                        alt={character.image}
                    />
                </div>
                <div className="flex flex-col justify-center ">
                    <section className="flex gap-5 m-5">
                        <div className={`${styles.bgSolid} w-1 h-full rounded-md`} />

                        <div>
                            <span
                                className={`${styles.bgTransparent} flex justify-center w-50 font-archivo p-1 rounded-md ${styles.textSolid}`}
                            >
                                {character.race}
                            </span>
                            <h1
                                className={`${styles.text} text-8xl font-clash font-black text-gray-900 dark:text-white  transition-colors`}
                            >
                                {character.name}
                            </h1>
                            <p className="flex items-cente gap-2">
                                <div
                                    className={`w-6 h-6  rounded-lg flex items-center justify-center text-white/50`}
                                >
                                    <span className="material-icons text-2xl">public</span>
                                </div>
                                <p className="text-white/50">{character.originPlanet.name}</p>
                            </p>
                        </div>
                    </section>
                    <section className="flex gap-5 m-5">
                        <div
                            className={`w-40 flex flex-col px-4 py-4 text-[15px] ${styles.textSolid} bg-stone-800/50 rounded-xl border border-solid`}
                        >
                            RAZA
                            <span className="text-2xl text-white/90 font-bold ">
                                {character.race}
                            </span>
                        </div>
                        <div
                            className={`w-40 flex flex-col px-4 py-4 text-[15px] ${styles.textSolid} bg-stone-800/50 rounded-xl border border-solid`}
                        >
                            GÉNERO
                            <span className="text-2xl text-white/90 font-bold">
                                {character.gender}
                            </span>
                        </div>
                        <div
                            className={`w-40 flex flex-col px-4 py-4 text-[15px] ${styles.textSolid} bg-stone-800/50 rounded-xl border border-solid`}
                        >
                            AFILIACIÓN
                            <span className="text-2xl text-white/90 font-bold">
                                {character.affiliation}
                            </span>
                        </div>
                    </section>

                    <section className="mx-5">
                        <div
                            className={`${styles.textSolid} bg-stone-100/5 dark:bg-stone-900/50 p-6 rounded-xl border`}
                        >
                            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <span
                                    className={`w-2 h-2 rounded-full ${styles.bgSolid} animate-pulse`}
                                ></span>
                                Nivel de Poder
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-stone-600 dark:text-stone-300">
                                            Base Ki
                                        </span>
                                        <span className={`font-mono ${styles.textSolid}`}>
                                            {character.ki}
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${styles.bgSolid} w-[20%] rounded-full shadow-[0_0_10px_rgba(242,127,13,0.5)]`}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-stone-600 dark:text-stone-300">
                                            Max Ki (Current Arc)
                                        </span>
                                        <span className={`font-mono ${styles.textSolid}`}>
                                            {character.maxKi}
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${styles.bgGradient} w-[92%] rounded-full shadow-[0_0_15px_rgba(242,127,13,0.6)] relative`}
                                        >
                                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-ping"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col m-5 pt-2">
                        <h1 className={`${styles.textSolid} text-2xl font-bold`}>
                            Descripción
                        </h1>
                        <p className="text-white/60 font-thin mt-1">
                            {character.description}
                        </p>
                    </section>

                    {character.transformations.length !== 0 && (
                        <section className="m-5">
                            <div class="flex items-center mb-4">
                                <h1 className={`${styles.textSolid} text-2xl font-bold`}>
                                    Transformaciones
                                </h1>
                            </div>
                            <div class="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 custom-scrollbar">
                                {character.transformations.map((transformation) => (
                                    <div
                                        class={` w-48 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 ${styles.border} transition-all group cursor-pointer relative`}
                                    >
                                        <div class="h-32 bg-neutral-800 relative">
                                            <div>
                                                <img
                                                    class="w-full h-full object-top opacity-60 group-hover:opacity-100 transition-opacity"
                                                    data-alt={transformation.name}
                                                    src={transformation.image}
                                                />
                                            </div>
                                        </div>
                                        <div class="p-3">
                                            <h4
                                                class={`font-bold text-sm text-neutral-800 dark:text-neutral-100 hover:${styles.textSolid} transition-colors`}
                                            >
                                                {transformation.name}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}


                </div>
            </div>
        </>
    );
};
