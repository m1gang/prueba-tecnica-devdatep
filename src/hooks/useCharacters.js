import { useQuery } from '@tanstack/react-query';
import { getCharactersAction } from '../actions/get-characters.action';

export const useCharacters = (page = 1, limit = 8) => {
    return useQuery({
        queryKey: ['characters', { page, limit }],
        queryFn: () => getCharactersAction(+page, +limit),
        staleTime: 1000 * 60 * 5,
    });
};
