import usePokemon from "../hooks/usePokemon";
import formatName from "../utils/formatName";
import {
  typeColorBackground,
  typeColorBackgroundDark,
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
        <p className={`${textColor} font-bold text-4xl`}>
          {formatName(data.name)} #{data.id}
        </p>
        <div>
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
        <div>
          <p className={`text-center text-3xl ${textColor}`}>Golpes </p>
          <ul className="grid grid-cols-2 gap-4 text-center items-center ">
            {data.moves.slice(0, 4).map((item) => (
              <li
                key={item.move.name}
                className={`rounded-full ${textColor} px-3 py-1 text-2xl border-2 ${borderColor} `}
              >
                {formatName(item.move.name)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Status</p>
          <div>
            {data.stats.map((item) => (
              <div key={item.stat.name} className="w-full ">
                <div className="flex justify-between text-sm">
                  <span>{formatName(item.stat.name)}</span>
                  <span className="font-bold">{item.base_stat}</span>
                </div>
                <div className="h-3 w-full rounded-full bg-black/10">
                  <div
                    className="h-3 rounded-full bg-blue-500"
                    style={{ width: `${(item.base_stat / 255) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
