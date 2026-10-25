import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../services/pokeApi";

export default function usePokemonList(limit: number = 20, offset: number = 0) {
  return useQuery({
    queryKey: ["pokemonList", limit, offset],
    queryFn: () => getPokemonList(limit, offset),
  });
}
