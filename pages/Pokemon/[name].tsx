import Image from "next/image"
import Link from "next/link"

export const getStaticProps = async ({ params }:any) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  const data = await res.json()
  return {
    props: {
      pokemon: data.results
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
	const paths = await res.json()
	console.log(paths)

	return {
		paths,
		// fallback: false // bat ki path nao k returned boi getStaticPaths se toi trang 404
		fallback: true // path nao k returned ngay lap tuc se show trang "tam thoi" => doi getStaticProps chay
		// => getStaticProps chay xong => return trang hoan chinh
	}
}

export default function APImc({pokemon}:any){

  return (
    <h1>
      {pokemon?.map((p:any) =>(


      <div key={p.name}>

        <Link href={p.url}>
          <a>{p.name}</a>
        </Link>

      </div>
      
      
      
      ))}
    </h1>
  )
}
