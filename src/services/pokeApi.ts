import type { ListaPokemons } from "../types/ListaPokemons";
import type { Pokemon } from "../types/Pokemon";

export async function getPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!res.ok) {
    throw new Error("Pokemon não econtrado");
  }
  return res.json();
}

export async function getAllPokemonNames(): Promise<ListaPokemons> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`);

  if (!res.ok) {
    throw new Error("Lista de Pokemon não encontrada");
  }
  return res.json();
}
