import { useQuery } from "@tanstack/react-query";
import { getCharactersAction } from "../actions/get-characters.action";
import { CharacterGrid } from "../components/CharacterGrid";
import { StatsGrid } from "../components/StatsGrid";
import logo from '../assets/svg/db.svg';

export const HomePage = () => {
    // const [searchTerm, setSearchTerm] = useState('')

    // const handleSearch = (e) => {
    //     setSearchTerm(e.target.value)
    // }

    const { data: characters } = useQuery({
        queryKey: ["db-characters"],
        queryFn: getCharactersAction,
        staleTime: 1000 * 60 * 5,
    });

    console.log(characters);
    if (!characters) {
        return <span> Cargando... </span>;
    }

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <div className="flex justify-center items-center gap-5">
                <img src={logo} alt="Logo" width={50} />
                <h1 className="mt-5 text-center text-5xl font-clash font-black pb-5">Dragon Ball API</h1>
            </div>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <StatsGrid />

                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="w-2 h-8 bg-primary rounded-full"></span>
                        Personajes
                    </h2>

                </div>

                <CharacterGrid characters={characters} />
            </main>
        </div>
    );
};
