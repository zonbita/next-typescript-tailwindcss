import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Pokemon() {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const callData = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
            const { results } = await res.json()
            const p = results.map((p:any, id:any) => 
            {
                const paddedId = ('00' + (id + 1)).slice(-3);
                const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
                return { ...p, image }
            })
            setPokemon(p)
        }
        
      callData()
    }, [])

    return (
        <>
        <div className='background-color4 animation-1 p-10 uppercase'>
            <h2 className="text-white text-center up"><span className="text-primary ">Pokemon List</span><span> - Fetch API </span></h2>    
            </div>
            <ul className='flex justify-center items-center p-5'><div className='flex flex-row'>
            <div className='grid grid-cols-2 md:grid-cols-4'> 
                {pokemon?.map((p:any, index:number) => (
                    <li className='p-2 md:p-5' key={index} data-aos='fade-up-right' data-aos-once='false'>
                        <Link href={`/pokemon?id=${index + 1}`}>
                            <a className="box-content-2 border border-[#ca8d0a] my-4 p-2 md:p-10 hover:shadow-md capitalize flex items-center text-2lg  rounded-md">
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-20 h-20 mr-3"
                                />
                                <span className="mr-2 font-bold">
                                    {index + 1}.
                                </span>
                                {p.name}
                            </a>
                        </Link>
                    </li>
                ))}
                </div></div>
            </ul>
        </>
    )
}

export default Pokemon
