import usePokemon from "../hooks/usePokemon";
import formatName from "../utils/formatName";
import {
  typeColorBackground,
  typeColorBackgroundDark,
  typeColorBorder,
  typeColorText,
} from "../utils/typesColor";
import Moves from "./Moves";
import StatsBar from "./StatsBar";

interface PokemonCardDetail {
  name: string;
}
export default function PokemonCardDetail({ name }: PokemonCardDetail) {
  const { data, isLoading, error } = usePokemon(name);

  if (isLoading) {
    return (
      <div>
        <h2>Carregando detalhes de {name}</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Pokemon {name} não encontrado</h2>
      </div>
    );
  }

  if (data) {
    const mainType = data.types[0].type.name;
    const colors = {
      bgColor: typeColorBackground[mainType],
      borderColor: typeColorBorder[mainType],
      textColor: typeColorText[mainType],
    };
    return (
      <div
        className={`flex flex-col items-center m-2.5 bg- rounded-xl border-4 ${colors.borderColor} ${colors.bgColor} hover:translate-y-1 p-4 shadow-2xl`}
      >
        <p className={`${colors.textColor} font-bold text-4xl`}>
          {formatName(data.name)} #{data.id}
        </p>
        <div>
          s
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt={`Imagem do Pokemon ${data.name}`}
          />
        </div>
        <div>
          <p className={`text center text-3xl text-center text-black`}>Tipos</p>
          <ul className="grid grid-cols-2 gap-4 text-center">
            {data.types.map((item) => (
              <li
                key={item.type.name}
                className={`rounded-full ${typeColorText[item.type.name]} px-3 py-1 text-2xl border-2 ${typeColorBackgroundDark[item.type.name]}`}
              >
                {formatName(item.type.name)}
              </li>
            ))}
          </ul>
        </div>
        <Moves moves={data.moves} colors={colors} />
        <StatsBar stats={data.stats} />
      </div>
    );
  }
}
