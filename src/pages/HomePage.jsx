import { useQuery } from "@tanstack/react-query";
import { getCharactersAction } from "../actions/get-characters.action";
import { CharacterGrid } from "../components/CharacterGrid";
import { StatsGrid } from "../components/StatsGrid";
import { Nav } from "../components/Nav";

export const HomePage = () => {
  // const [searchTerm, setSearchTerm] = useState('')

  // const handleSearch = (e) => {
  //     setSearchTerm(e.target.value)
  // }

  const { data: characters, isLoading } = useQuery({
    queryKey: ["db-characters"],
    queryFn: getCharactersAction,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <Nav />
      <div className="flex justify-center items-center gap-5">
        <h1 className="mt-5 text-center text-5xl font-clash font-black pb-5">
          Todos los personajes
        </h1>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <StatsGrid />

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            Personajes
          </h2>
        </div>

        <CharacterGrid characters={characters} isLoading={isLoading} />
      </main>
    </div>
  );
};
