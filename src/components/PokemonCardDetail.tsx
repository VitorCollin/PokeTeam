import usePokemon from "../hooks/usePokemon";
import formatName from "../utils/formatName";
import {
  typeColorBackground,
  typeColorBorder,
  typeColorText,
} from "../utils/typesColor";

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
    const bgColor = typeColorBackground[mainType];
    const borderColor = typeColorBorder[mainType];
    const textColor = typeColorText[mainType];
    return (
      <div
        className={`flex flex-col items-center m-2.5 bg- rounded-xl border-4 ${borderColor} ${bgColor} hover:translate-y-1 p-4 shadow-2xl`}
      >
        <p className={`${textColor} text-4xl`}>
          {formatName(data.name)} #{data.id}
        </p>
        <div>
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt={`Imagem do Pokemon ${data.name}`}
          />
        </div>
        <div>
          <p className={`text-center text-3xl ${textColor}`}>Habilidades</p>
          <ul className="flex gap-2">
            {data.moves.map((item) => (
              <li
                key={item.move.name}
                className={`rounded-full ${textColor} px-3 py-1 text-2xl border-2 ${borderColor} `}
              >
                {formatName(item.move.name)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
