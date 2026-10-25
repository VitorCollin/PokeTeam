import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../services/pokeApi";

export default function usePokemon(name: string) {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(name),
  });
}
