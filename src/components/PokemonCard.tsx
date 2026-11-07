import { Link } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import formatName from "../utils/formatName";
import GlassCard from "./GlassCard";

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
    <GlassCard className="flex flex-col items-center ">
      <Link to={`/pokemon?pokemon=${data.name}`}>
        <h2 className="font-bold text-2xl">{formatName(data.name)}</h2>

        <img
          className=" h-44 w-44 object-contain drop-shadow-2xl"
          src={data.sprites.other["official-artwork"].front_default}
          alt={`Imagem do Pokemon ${data.name}`}
        />
        <h3 className="font-bold">Tipos: </h3>
        <ul className="flex gap-2 items-center justify-center">
          {data.types.map((item) => (
            <GlassCard className="text-sm p-3 items-center">
              <li className="" key={item.type.name}>
                {formatName(item.type.name)}
              </li>
            </GlassCard>
          ))}
        </ul>
      </Link>
    </GlassCard>
  );
}
