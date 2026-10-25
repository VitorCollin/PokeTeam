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
    <div>
      <h2 className="font-bold">{data.name}</h2>
      <img
        src={data.sprites.other["official-artwork"].front_default}
        alt={`Imagem do Pokemon ${data.name}`}
      />
      <h3>Tipos: </h3>
      <ul>
        {data.types.map((item) => (
          <li key={item.type.name}>{item.type.name}</li>
        ))}
      </ul>
    </div>
  );
}
