import { useParams } from "react-router";
import { raceStyles } from "../utils/raceStyles";
import { CharacterPageSkeleton } from "../components/CharacterPageSkeleton";
import { ReviewSection } from "../features/reviews/components/ReviewSection";
import { useCharacter } from "../hooks/useCharacter";

export const CharacterPage = () => {
    const { id = "" } = useParams();

    const { data: character, isLoading } = useCharacter(id);

    if (isLoading || !character) {
        return <CharacterPageSkeleton />;
    }

    const styles = raceStyles[character.race] || raceStyles["Other"];

    return (
        <>
            <main className="flex-1 flex flex-col lg:flex-row relative">
                <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-[0.03]">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-scouter-grid bg-scouter-grid"></div>
                </div>
                <div className="absolute -left-20 bottom-0 w-125 h-125 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                <section className="lg:w-5/12 xl:w-1/2 relative flex items-end justify-center lg:h-[calc(100vh-4rem)] bg-neutral-100/50 dark:bg-neutral-900/30 overflow-hidden group">
                    <div className="absolute top-10 left-10 text-[20rem] font-black text-neutral-900/5 dark:text-white/5 leading-none select-none z-0">
                        悟
                    </div>
                    <div className="relative z-1 w-full h-full flex items-end justify-center pb-0 lg:pb-12 transition-transform duration-500 group-hover:scale-105">
                        <img
                            alt="Abstract orange energy swirls representing Goku's aura"
                            className="object-contain max-h-[60vh] lg:max-h-[85vh] w-auto drop-shadow-2xl filter brightness-110 contrast-125"
                            src={character.image}
                        />
                        <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-background-light dark:from-background-dark to-transparent lg:hidden"></div>
                        <div className="absolute bottom-8 left-8 hidden lg:block">
                            <div
                                className={`flex items-center gap-2 ${styles.textSolid} mb-1`}
                            >
                                <span className="material-icons text-sm">fingerprint</span>
                                <span className="text-xs font-mono uppercase tracking-widest">
                                    Subject ID: #{character.id}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="lg:w-7/12 xl:w-1/2  lg:px-4 lg:h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar relative z-1">
                    <div className="flex flex-col justify-center ">
                        <div className="flex gap-5 m-5">
                            <div
                                className={`${styles.bgSolid} w-1.5 self-stretch rounded-md`}
                            />

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
                                <p className="flex items-center gap-2">
                                    <div
                                        className={`w-6 h-6  rounded-lg flex items-center justify-center text-white/50`}
                                    >
                                        <span className="material-icons text-2xl">public</span>
                                    </div>
                                    <p className="text-white/50">{character.originPlanet.name}</p>
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 m-5">
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
                        </div>

                        <div className="mx-5">
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
                        </div>

                        <div className="flex flex-col m-5 pt-2">
                            <h1 className={`${styles.textSolid} text-2xl font-bold`}>
                                Descripción
                            </h1>
                            <p className="text-white/60 font-thin mt-1">
                                {character.description}
                            </p>
                        </div>

                        {character.transformations.length !== 0 && (
                            <div className="m-5">
                                <div className="flex items-center mb-4">
                                    <h1 className={`${styles.textSolid} text-2xl font-bold`}>
                                        Transformaciones
                                    </h1>
                                </div>
                                <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 custom-scrollbar">
                                    {character.transformations.map((transformation) => (
                                        <div
                                            key={transformation.id}
                                            className={` w-48 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 ${styles.border} transition-all group cursor-pointer relative`}
                                        >
                                            <div className="h-32 bg-neutral-800 relative">
                                                <div>
                                                    <img
                                                        className="w-full h-full object-top opacity-60 group-hover:opacity-100 transition-opacity"
                                                        alt={transformation.name}
                                                        src={transformation.image}
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <h4
                                                    className={`font-bold text-sm text-neutral-800 dark:text-neutral-100 hover:${styles.textSolid} transition-colors`}
                                                >
                                                    {transformation.name}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <ReviewSection characterId={character.id} characterName={character.name} />
                </section>
            </main>
        </>
    );
};
