import { Pokemon } from "./components/Pokemon"

async function getData() {
  const res = await fetch('http://localhost:3000/api/pokemon')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <main className="grid grid-cols-2 md:grid-cols-3 gap-4 min-h-screen p-24">
      {data.data.results.map((pokemon) => <Pokemon pokemon={pokemon} />)}
    </main>
  )
}
