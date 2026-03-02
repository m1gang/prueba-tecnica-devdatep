import { useQuery } from '@tanstack/react-query';
import { getPlanetsAction } from '../actions/get-planets.action';

export const usePlanets = (page = 1, limit = 8) => {
    return useQuery({
        queryKey: ['planets', { page, limit }],
        queryFn: () => getPlanetsAction(page, limit),
        staleTime: 1000 * 60 * 5,
    });
};
