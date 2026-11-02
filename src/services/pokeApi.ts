import type { ListaPokemons } from "../types/ListaPokemons";
import type MoveDetails from "../types/MoveDetails";
import type PokemonDetails from "../types/PokemonDetails";

export async function getPokemon(name: string): Promise<PokemonDetails> {
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

export async function getMove(name: string): Promise<MoveDetails> {
  const res = await fetch(`https://pokeapi.co/api/v2/move/${name}`);

  if (!res.ok) {
    throw new Error("Detalhes do golpe não encontrados");
  }
  return res.json();
}
