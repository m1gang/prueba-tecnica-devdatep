import { useQuery } from "@tanstack/react-query";

import { CharacterGrid } from "../components/CharacterGrid";
import { getCharactersAction } from "../actions/get-characters.action";
import { useSearchParams } from "react-router";
import { Pagination } from "../components/Pagination";
import { StatsGridCharacters } from "../components/StatsGridCharacters";

export const HomePage = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "8";

  const { data, isLoading } = useQuery({
    queryKey: ["db-characters", { page, limit }],
    queryFn: () => getCharactersAction(+page, +limit),
    staleTime: 1000 * 60 * 5,
  });

  const { sortedData: characters, meta } = data || {};

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <div className="flex justify-center items-center gap-5">
        <h1 className="mt-5 text-center text-5xl font-clash font-black pb-5">
          Todos los personajes
        </h1>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <StatsGridCharacters data={meta} />

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            Personajes
          </h2>
        </div>

        <CharacterGrid characters={characters} isLoading={isLoading} />
      </main>
      <Pagination totalPages={meta?.totalPages} />
    </div>
  );
};
