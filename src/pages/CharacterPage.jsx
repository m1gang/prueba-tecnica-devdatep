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

    const styles = raceStyles[character.race] || raceStyles["Other"];

    return (
        <>
            <div className="grid lg:grid-cols-2">
                <div className="flex justify-center items-center ">
                    <img className="h-screen" src={character.image} alt={character.image} />
                </div>
                <div className="flex flex-col justify-center ">
                    <section className="flex gap-5 m-5">
                        <div className={`${styles.bgSolid} w-1 h-full rounded-md`} />

                        <div>
                            <span className={`${styles.bgTransparent} flex justify-center w-50 font-archivo p-1 rounded-md ${styles.textSolid}`}>{character.race}</span>
                            <h1 className={`${styles.text} text-8xl font-clash font-black text-gray-900 dark:text-white  transition-colors`}>{character.name}</h1>
                            <p className="flex items-cente gap-2">
                                <div className={`w-6 h-6  rounded-lg flex items-center justify-center text-white/50`}>
                                    <span className="material-icons text-2xl">public</span>
                                </div>
                                <p className="text-white/50">{character.originPlanet.name}</p>
                            </p>
                        </div>
                    </section>
                    <section className="flex gap-5 m-5">
                        <div className={`w-40 flex flex-col px-4 py-4 text-[15px] ${styles.textSolid} bg-stone-800/50 rounded-xl border border-solid`}>
                            RAZA
                            <span className="text-2xl text-white/90 font-bold ">{character.race}</span>
                        </div>
                        <div className={`w-40 flex flex-col px-4 py-4 text-[15px] ${styles.textSolid} bg-stone-800/50 rounded-xl border border-solid`}>
                            GÉNERO
                            <span className="text-2xl text-white/90 font-bold">{character.gender}</span>
                        </div>
                        <div className={`w-40 flex flex-col px-4 py-4 text-[15px] ${styles.textSolid} bg-stone-800/50 rounded-xl border border-solid`}>
                            AFILIACIÓN
                            <span className="text-2xl text-white/90 font-bold">{character.affiliation}</span>
                        </div>
                    </section>

                    <section className="mx-5">
                        <div
                            className={`${styles.textSolid} bg-stone-100/5 dark:bg-stone-900/50 p-6 rounded-xl border`}>
                            <h3
                                className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${styles.bgSolid} animate-pulse`}></span>
                                Nivel de Poder
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-stone-600 dark:text-stone-300">Base Ki</span>
                                        <span className={`font-mono ${styles.textSolid}`}>{character.ki}</span>
                                    </div>
                                    <div className="h-2 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${styles.bgSolid} w-[20%] rounded-full shadow-[0_0_10px_rgba(242,127,13,0.5)]`}>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-stone-600 dark:text-stone-300">Max Ki (Current
                                            Arc)</span>
                                        <span className={`font-mono ${styles.textSolid}`}>{character.maxKi}</span>
                                    </div>
                                    <div className="h-2 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${styles.bgGradient} w-[92%] rounded-full shadow-[0_0_15px_rgba(242,127,13,0.6)] relative`}>
                                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-ping"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                    <section className="flex flex-col m-5 pt-2">
                        <h1 className={`${styles.textSolid} text-2xl font-bold`}>Descripción</h1>
                        <p className="text-white/60 font-thin mt-1">{character.description}</p>
                    </section>

                    <section className="m-5">

                        <div class="flex items-center mb-4">
                            <h1 className={`${styles.textSolid} text-2xl font-bold`}>Transformaciones</h1>

                        </div>
                        <div class="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 custom-scrollbar">
                            <div
                                class="shrink-0 w-48 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-primary transition-all group cursor-pointer relative">
                                <div class="h-32 bg-neutral-800 relative">
                                    <img class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                        data-alt="Golden energy burst texture"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrIJjRCy-WbUN3S7YUkYrYBmwwm6DH6jAhkO5No94HHb0z0Od5ll_5nTQ3VlMWew7FBI2u7tLZQrdU5FCRcS9KOUE5XYfnUYAEdTC4yoJWXZ8Sa0JCvjZc-gVaRiGoIYi_gC8aph_m2TBh1xUhDSpadx7IO6BKz7bBahokLiR51zWSBzmvZtDrKopIGtAF6IHHc6kyd0ohOrTaA2MoEieET_7YqewmODLUkzTu93dUt71u5X8hU8lMaUZxskW9Sf4qXRPwW5SXIxs" />
                                    <div class="absolute inset-0 bg-linear-to-t from-neutral-900 to-transparent"></div>
                                    <span class="absolute top-2 right-2 text-primary">
                                        <span class="material-icons text-sm">bolt</span>
                                    </span>
                                </div>
                                <div class="p-3">
                                    <h4
                                        class="font-bold text-sm text-neutral-800 dark:text-neutral-100 group-hover:text-primary transition-colors">
                                        Super Saiyan</h4>
                                    <p class="text-xs text-neutral-500 mt-1">Multiplier: 50x</p>
                                </div>
                            </div>
                            <div
                                class="shrink-0 w-48 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-primary transition-all group cursor-pointer relative">
                                <div class="h-32 bg-neutral-800 relative">
                                    <img class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                        data-alt="Golden energy burst texture"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrIJjRCy-WbUN3S7YUkYrYBmwwm6DH6jAhkO5No94HHb0z0Od5ll_5nTQ3VlMWew7FBI2u7tLZQrdU5FCRcS9KOUE5XYfnUYAEdTC4yoJWXZ8Sa0JCvjZc-gVaRiGoIYi_gC8aph_m2TBh1xUhDSpadx7IO6BKz7bBahokLiR51zWSBzmvZtDrKopIGtAF6IHHc6kyd0ohOrTaA2MoEieET_7YqewmODLUkzTu93dUt71u5X8hU8lMaUZxskW9Sf4qXRPwW5SXIxs" />
                                    <div class="absolute inset-0 bg-linear-to-t from-neutral-900 to-transparent"></div>
                                    <span class="absolute top-2 right-2 text-primary">
                                        <span class="material-icons text-sm">bolt</span>
                                    </span>
                                </div>
                                <div class="p-3">
                                    <h4
                                        class="font-bold text-sm text-neutral-800 dark:text-neutral-100 group-hover:text-primary transition-colors">
                                        Super Saiyan</h4>
                                    <p class="text-xs text-neutral-500 mt-1">Multiplier: 50x</p>
                                </div>
                            </div>
                            <div
                                class="shrink-0 w-48 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-primary transition-all group cursor-pointer relative">
                                <div class="h-32 bg-neutral-800 relative">
                                    <img class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                        data-alt="Blue energy lightning texture"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuBgYug3qnF5dYcL7I6Ptc0pj_-9TFcqPGJt5-tNtSE8lpIB95GMGjn3U4uadogeXhHaFHXkcqXZPoP7pJSJ0VrC_1-npkzwMW5xl6USh--KqrMMPr63VPWyXKtsYIBoP_d-AfnXkktB-aUbmoV9e4hiKNq07JhCP63Ol0_GKRQaftsMPVEhApT2uUVxeZpnCJUn0srSrudshEmx73R9SLJK8QkHJfxj7XLVxnxHeOJwWEiZ-nmESupBBt2lHlAFY22Zd4I9DZFt8" />
                                    <div class="absolute inset-0 bg-linear-to-t from-neutral-900 to-transparent"></div>
                                    <span class="absolute top-2 right-2 text-cyan-400">
                                        <span class="material-icons text-sm">bolt</span>
                                    </span>
                                </div>
                                <div class="p-3">
                                    <h4
                                        class="font-bold text-sm text-neutral-800 dark:text-neutral-100 group-hover:text-cyan-400 transition-colors">
                                        Super Saiyan Blue</h4>
                                    <p class="text-xs text-neutral-500 mt-1">God Ki Infused</p>
                                </div>
                            </div>
                            <div
                                class="shrink-0 w-48 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-primary transition-all group cursor-pointer relative">
                                <div class="h-32 bg-neutral-800 relative">
                                    <img class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                        data-alt="Silver galactic energy texture"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmcwwC0CGwmF2-rM5uxkDgGhrpY6VT7zDbUJz2PQhvCt34zhEU_kRMo-tD1Pj9M5bhWoZRjXCBeqrLuDg42XZprErbjRLsN9e2qmBNCvS7-3kTOlxXDNTuKD-ANl87ms6Pvq19x4dpJy00A2JSJndJsq8k0apBR3n2xtOJbm-OFq8VXulm-nnmxvQm9JK18KkU5rq__bz63VIKXlVwEC496Rp_E-b5faR1PusYazj383S-LKbTy5Aks00AeMMLoUwdoJOZpJa3dBw" />
                                    <div class="absolute inset-0 bg-linear-to-t from-neutral-900 to-transparent"></div>
                                    <span class="absolute top-2 right-2 text-white">
                                        <span class="material-icons text-sm">auto_awesome</span>
                                    </span>
                                </div>
                                <div class="p-3">
                                    <h4
                                        class="font-bold text-sm text-neutral-800 dark:text-neutral-100 group-hover:text-white transition-colors">
                                        Ultra Instinct</h4>
                                    <p class="text-xs text-neutral-500 mt-1">Autonomous Body</p>
                                </div>
                            </div>

                        </div>

                    </section>

                    {/* <p>{character.originPlanet.name}</p>
                    <img src={character.originPlanet.image} alt={character.originPlanet.name} width={200} /> */}
                </div>
            </div>


        </>
    );
};
