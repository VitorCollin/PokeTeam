import useMoves from "../hooks/useMoves";
import {
  typeColorBackground,
  typeColorBackgroundDark,
  typeColorText,
} from "../utils/typesColor";

interface MovesProps {
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
}
export default function Moves({ moves }: MovesProps) {
  const names = moves.slice(0, 4).map((item) => item.move.name);

  const results = useMoves(names);
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4 text-center">
        {results.map((result, index) => {
          const name = names[index];
          if (result.isLoading) return <li key={name}>Carregando...</li>;
          if (result.error) return null;

          if (result.data) {
            const colors = {
              textColor: typeColorText[result.data.type.name],
              backgroundColor: typeColorBackground[result.data.type.name],
              backgroundDarkColor:
                typeColorBackgroundDark[result.data.type.name],
            };

            return (
              <li
                key={result.data.name}
                className={`rounded-full ${colors.textColor} px-3 py-1 text-2xl border-2 ${colors.backgroundDarkColor}`}
              >
                {result.data.name}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
