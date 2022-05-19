import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import useSWR from 'swr'
import React from 'react';

// export async function getServerSideProps() {
//   const res = await fetch(`https://picsum.photos/v2/list?page=2&limit=100`)
//   const data = await res.json()
//   return {
//     props: {
//       pokemon: data
//     }
//   }
// }

export async function getStaticProps() {

      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      const { results } = await res.json()
      const pokemon = results.map((p:any, id:any) => 
      {
          const paddedId = ('00' + (id + 1)).slice(-3);
          const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
          return { ...p, image }
      })
      return {
          props: { pokemon },
      }
}

function APImc({ pokemon }:any) {
  return (
      <div>
          <h1 className="text-4xl mb-8 text-center ">The Nextjs Pokedex</h1>
          <ul>
              {pokemon?.map((p:any, index:number) => (
                  <li key={index}>
                      <Link href={`/pokemon?id=${index + 1}`}>
                          <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
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
          </ul>
      </div>
  )
}

// export async function getStaticPaths() {
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
//     const { results } = await res.json()
//     const pokemon = results.map((p:any, id:any) => 
//     {
//         const paddedId = ('00' + (id + 1)).slice(-3);
//         const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
//         return { ...p, image }
//     })
//     return {
//         paths: [
//             '/APImc',
//             {  params: { pokemon } },
//           ],
//           fallback: true,
       
//     }
// }


export default APImc