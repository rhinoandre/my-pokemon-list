import Image from "next/image";
import Link from "next/link";

const BG_COLORS = {
  grass: 'bg-grass',
  fire: 'bg-fire',
  water: 'bg-water',
  ghost: 'bg-ghost',
  eletric: 'bg-eletric',
  bug: 'bg-bug',
  normal: 'bg-normal',
  steel: 'bg-steel',
}

const BORDER_COLORS = {
  grass: 'border-grass',
  fire: 'border-fire',
  water: 'border-water',
  ghost: 'border-ghost',
  eletric: 'border-eletric',
  bug: 'border-bug',
  normal: 'border-normal',
  steel: 'border-steel',
}

export function Pokemon({ pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div className={`group border-2 border-${pokemon.type} rounded-2xl`} key={pokemon.id}>
        <span>#{String(pokemon.id).padStart(3, '0')}</span>
        <Image
          src={pokemon.image}
          width={250}
          height={250}
          alt={pokemon.name}
        />
        <h1 className={`bg-${pokemon.type} rounded-b-xl px-2 py-1 text-2xl text-center font-bold capitalize group-hover:uppercase`}>{pokemon.name}</h1>
      </div>
    </Link>
  )
}