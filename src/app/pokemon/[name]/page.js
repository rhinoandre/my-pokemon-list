async function getData({ name }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Pokemon({ params }) {
  const pokemon = await getData({ name: params.name })

  return (
    <div>My Pokemon Stats:
      <ul>
      {pokemon.stats.map(stat => (
        <li className="flex gap-3">
          {stat.base_stat}:
          <div className="block w-[100px] h-5 bg-white relative">
            <span className="absolute inset-0 bg-red-500" style={{
              width: `${stat.base_stat}px`
            }} />
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}