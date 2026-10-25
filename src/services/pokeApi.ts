import type { ListaPokemons } from "../types/ListaPokemons";
import type { Pokemon } from "../types/Pokemon";

export async function getPokemonList(
  limit: number = 20,
  offset: number = 0,
): Promise<ListaPokemons> {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );

  if (!res.ok) {
    throw new Error("Lista de Pokemon não encontrada");
  }
  return res.json();
}

export async function getPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!res.ok) {
    throw new Error("Pokemon não econtrado");
  }
  return res.json();
}
