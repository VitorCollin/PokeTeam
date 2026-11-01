import { useQuery } from "@tanstack/react-query";
import { getAllPokemonNames } from "../services/pokeApi";

export default function usePokemonList() {
  return useQuery({
    queryKey: ["pokemonList"],
    queryFn: () => getAllPokemonNames(),
  });
}
