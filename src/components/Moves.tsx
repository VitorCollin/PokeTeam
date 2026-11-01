import formatName from "../utils/formatName";

interface MovesProps {
  colors: {
    textColor: string;
    borderColor: string;
  };
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
}
export default function Moves({ moves, colors }: MovesProps) {
  return (
    <div>
      <p className={`text-center text-3xl ${colors.textColor}`}>Golpes </p>
      <ul className="grid grid-cols-2 gap-4 text-center items-center ">
        {moves.slice(0, 4).map((item) => (
          <li
            key={item.move.name}
            className={`rounded-full ${colors.textColor} px-3 py-1 text-2xl border-2 ${colors.borderColor} `}
          >
            {formatName(item.move.name)}
          </li>
        ))}
      </ul>
    </div>
  );
}
