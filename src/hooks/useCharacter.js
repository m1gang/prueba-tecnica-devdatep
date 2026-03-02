import { useQuery } from '@tanstack/react-query';
import { getCharacterAction } from '../actions/get-character.action';

export const useCharacter = (id) => {
    return useQuery({
        queryKey: ['character', id],
        queryFn: () => getCharacterAction(id),
        staleTime: 1000 * 60 * 5,
        enabled: !!id,
    });
};
