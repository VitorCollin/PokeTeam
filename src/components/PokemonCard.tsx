import usePokemon from "../hooks/usePokemon";

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
    <div className="flex flex-col items-center rounded-xl border p-4 shadow-sm">
      <h2 className="font-bold">{data.name}</h2>
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
            {item.type.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
