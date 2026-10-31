import usePokemon from "../hooks/usePokemon";
import formatName from "../utils/formatName";

interface PokemonCardProps {
  name: string;
}

export default function PokemonCard({ name }: PokemonCardProps) {
  const { data, isLoading, error } = usePokemon(name);

  if (isLoading) {
    return <p className="size-2">Carregando...</p>;
  }

  if (error || !data) {
    return <p className="size-2"> Erro ao Carregar pokemons</p>;
  }

  return (
    <div className="flex flex-col items-center rounded-xl border-2 border-amber-900 bg-linear-to-bl from-red-600 to-yellow-400 hover:translate-y-1 p-4 shadow-2xl">
      <h2 className="font-bold">{formatName(data.name)}</h2>
      <img
        className=" h-32 w-32 object-contain"
        src={data.sprites.other["official-artwork"].front_default}
        alt={`Imagem do Pokemon ${data.name}`}
      />
      <h3>Tipos: </h3>
      <ul className="flex gap-2">
        {data.types.map((item) => (
          <li
            className="rounded-full px-3 py-1 text-sm bg-gray-200"
            key={item.type.name}
          >
            {formatName(item.type.name)}
          </li>
        ))}
      </ul>
    </div>
  );
}
