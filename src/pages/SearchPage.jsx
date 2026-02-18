import { useRef } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { searchCharacterAction } from "../actions/search-characters.action";
import { CharacterGrid } from "../components/CharacterGrid";

export const SearchPage = () => {
  const inputRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") ?? undefined;

  const {
    data: searchCharacters,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ["search", { name }],
    queryFn: () => searchCharacterAction(name),
    staleTime: 1000 * 60 * 5,
    enabled: !!name,
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const value = inputRef.current?.value ?? "";
      setSearchParams((prev) => {
        prev.set("name", value);
        return prev;
      });
    }
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
        <div className="hidden md:flex items-center gap-4">
          <div className="relative m-5">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="material-icons text-gray-400 text-lg">
                search
              </span>
            </span>
            <input
              ref={inputRef}
              className="w-64 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 text-sm rounded-full focus:ring-primary focus:border-primary block pl-10 p-2.5 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 focus:w-80"
              placeholder="Buscar personajes..."
              type="text"
              onKeyDown={(event) => handleKeyDown(event)}
              defaultValue={searchParams.get("name") ?? ""}
            />
          </div>
        </div>

        {!name ? (
          <div className="text-center py-20 border-2 border-dashed border-gray-200 dark:border-white/5 rounded-2xl mx-5">
            <span className="text-gray-500 dark:text-gray-400">
              Comienza tu búsqueda escribiendo en el cuadro de arriba.
            </span>
          </div>
        ) : isLoading ||
          (isFetched && searchCharacters && searchCharacters.length > 0) ? (
          <CharacterGrid characters={searchCharacters} isLoading={isLoading} />
        ) : (
          <div className="text-center py-20">
            <span className="text-gray-500 dark:text-gray-400">
              Personaje no encontrado
            </span>
          </div>
        )}
      </main>
    </div>
  );
};
