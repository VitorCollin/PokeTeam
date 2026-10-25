import { useQuery } from "@tanstack/react-query";
import { getAllPokemonNames } from "../services/pokeApi";

export default function useAllPokemonNames() {
  return useQuery({
    queryKey: ["pokeNames"],
    queryFn: () => getAllPokemonNames(),
  });
}
