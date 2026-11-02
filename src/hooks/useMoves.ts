import { useQueries } from "@tanstack/react-query";
import { getMove } from "../services/pokeApi";

export default function useMoves(names: string[]) {
  return useQueries({
    queries: names.map((name) => ({
      queryKey: ["move", name],
      queryFn: () => getMove(name),
    })),
  });
}
