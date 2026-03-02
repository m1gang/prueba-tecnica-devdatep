import { useQuery } from '@tanstack/react-query';
import { searchCharacterAction } from '../actions/search-characters.action';
import { searchPlanetsAction } from '../actions/search-planets.action';

export const useSearch = (name) => {
    const charactersQuery = useQuery({
        queryKey: ['search-characters', name],
        queryFn: () => searchCharacterAction(name),
        staleTime: 1000 * 60 * 5,
        enabled: !!name,
    });

    const planetsQuery = useQuery({
        queryKey: ['search-planets', name],
        queryFn: () => searchPlanetsAction(name),
        staleTime: 1000 * 60 * 5,
        enabled: !!name,
    });

    const isLoading = charactersQuery.isLoading || planetsQuery.isLoading;
    const isFetched = charactersQuery.isFetched && planetsQuery.isFetched;

    const characters = charactersQuery.data || [];
    const planets = planetsQuery.data || [];

    const hasResults = characters.length > 0 || planets.length > 0;
    const totalResults = characters.length + planets.length;

    return {
        characters,
        planets,
        isLoading,
        isFetched,
        hasResults,
        totalResults,
    };
};
