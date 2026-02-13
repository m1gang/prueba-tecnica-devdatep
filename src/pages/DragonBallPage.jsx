import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getCharactersAction } from '../actions/get-characters.action'

export const DragonBallPage = () => {

    const { data: characters } = useQuery({
        queryKey: ['db-characters'],
        queryFn: getCharactersAction,
        staleTime: 1000 * 60 * 5
    })

    console.log(characters)
    if (!characters) {
        return <span> Cargando... </span>
    }

    return (
        <div className='p-0'>
            <h1 className='text-3xl text-center font-bold font-clash'>Dragon Ball Page Characters</h1>
            <div className='font-archivo grid grid-cols-4'>
                {
                    characters.map(character => (
                        <div className='flex flex-col justify-center items-center' key={character.id}>
                            <h1 className='font-clash font-bold'>
                                {character.name}
                            </h1>
                            <img src={character.image} alt={character.name} className='h-50' />
                            <h2>Raza: {character.race}</h2>
                            <h2>Max ki: {character.maxKi}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
