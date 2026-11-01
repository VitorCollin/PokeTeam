import { useSearchParams } from "react-router-dom";
import PokemonCardDetail from "../components/PokemonCardDetail";

export default function PokemonDetail() {
  const [searhParams] = useSearchParams();
  const pokemonName = searhParams.get("pokemon");
  if (!pokemonName) {
    return (
      <div>
        <h1>Pokemon não encontrado</h1>
      </div>
    );
  }
  return (
    <div>
      <PokemonCardDetail name={pokemonName} />
    </div>
  );
}
