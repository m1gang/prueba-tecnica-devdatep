import { useRef } from "react";
import { useSearchParams } from "react-router";
import { useSearch } from "../hooks/useSearch";
import { CharacterGrid } from "../components/CharacterGrid";
import { PlanetGrid } from "../components/PlanetGrid";
import { PlanetCardSkeleton } from "../components/PlanetCardSkeleton";

const SearchSkeletons = () => (
    <>
        <div className="mb-10">
            <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white dark:bg-card-dark rounded-xl overflow-hidden">
                        <div className="aspect-4/5">
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div>
            <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                    <PlanetCardSkeleton key={i} />
                ))}
            </div>
        </div>
    </>
);

export const SearchPage = () => {
    const inputRef = useRef(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name") ?? undefined;

    const { characters, planets, isLoading, hasResults, totalResults } = useSearch(name);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            const value = inputRef.current?.value ?? "";
            setSearchParams((prev) => {
                prev.set("name", value);
                return prev;
            });
        }
    };

    const handleClick = () => {
        const value = inputRef.current?.value ?? "";
        setSearchParams((prev) => {
            prev.set("name", value);
            return prev;
        });
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <div className="flex justify-center items-center gap-5">
                <h1 className="mt-5 text-center text-5xl font-clash font-black pb-5">
                    Página de búsqueda
                </h1>
            </div>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="w-2 h-8 bg-primary rounded-full"></span>
                        Filtros
                    </h2>
                </div>

                <div className="relative group max-w-2xl mx-auto mb-10">
                    <div className="absolute -inset-1 bg-linear-to-r from-primary to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex items-center bg-white dark:bg-[#32281e] rounded-lg shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10">
                        <div className="pl-4 text-slate-400 dark:text-slate-500">
                            <span className="material-icons text-2xl">search</span>
                        </div>
                        <input
                            ref={inputRef}
                            className="w-full bg-transparent border-0 py-4 pl-3 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-0 sm:text-lg font-medium"
                            placeholder="Busca personajes o planetas (ejem. Goku, Vegeta, Namek)..."
                            type="text"
                            onKeyDown={handleKeyDown}
                            defaultValue={searchParams.get("name") ?? ""}
                        />
                        <button
                            className="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 m-1.5 rounded-md font-semibold shadow-lg shadow-orange-500/30 transition-all active:scale-95"
                            onClick={handleClick}
                        >
                            Search
                        </button>
                    </div>
                </div>

                {!name ? (
                    <div className="text-center py-20 border-2 border-dashed border-gray-200 dark:border-white/5 rounded-2xl mx-5">
                        <span className="material-icons text-5xl text-gray-400 mb-3">search</span>
                        <p className="text-gray-500 dark:text-gray-400">
                            Comienza tu búsqueda escribiendo en el cuadro de arriba.
                        </p>
                        <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                            Puedes buscar personajes y planetas
                        </p>
                    </div>
                ) : isLoading ? (
                    <SearchSkeletons />
                ) : hasResults ? (
                    <>
                        {totalResults > 0 && (
                            <div className="mb-6 px-2">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Se encontraron {totalResults} resultado{totalResults !== 1 ? 's' : ''} para "{name}"
                                </span>
                            </div>
                        )}

                        {characters.length > 0 && (
                            <div className="mb-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="material-icons text-primary">person</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        Personajes ({characters.length})
                                    </h3>
                                </div>
                                <CharacterGrid characters={characters} isLoading={false} />
                            </div>
                        )}

                        {planets.length > 0 && (
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="material-icons text-primary">public</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        Planetas ({planets.length})
                                    </h3>
                                </div>
                                <PlanetGrid planets={planets} />
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-20 border-2 border-dashed border-gray-200 dark:border-white/5 rounded-2xl mx-5">
                        <span className="material-icons text-5xl text-gray-400 mb-3">search_off</span>
                        <p className="text-gray-500 dark:text-gray-400">
                            No se encontraron resultados para "{name}"
                        </p>
                        <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                            Intenta con otro término de búsqueda
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
};
