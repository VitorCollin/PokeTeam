import formatName from "../utils/formatName";
import { typeColorText, typeColorBackgroundDark } from "../utils/typesColor";

interface TypesProps {
  types: {
    type: {
      name: string;
    };
  }[];
}

export default function Types({ types }: TypesProps) {
  return (
    <div>
      <p className={`text center text-3xl text-center text-black`}>Tipos</p>
      <ul className="grid grid-cols-2 gap-4 text-center">
        {types.map((item) => (
          <li
            key={item.type.name}
            className={`rounded-full ${typeColorText[item.type.name]} px-3 py-1 text-2xl border-2 ${typeColorBackgroundDark[item.type.name]}`}
          >
            {formatName(item.type.name)}
          </li>
        ))}
      </ul>
    </div>
  );
}
