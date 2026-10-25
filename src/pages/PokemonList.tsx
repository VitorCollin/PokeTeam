import PokemonCard from "../components/PokemonCard";
import usePokemonList from "../hooks/usePokemonList";

export default function PokemonList() {
  const { data, isLoading, error } = usePokemonList(20, 0);

  if (isLoading) return <p>Carregando Pokemons...</p>;

  if (error || !data) return <p>Erro ao carregar Pokemons</p>;

  return (
    <div>
      <h1>PokeTeam</h1>
      <ul>
        {data.results.map((poke) => (
          <li key={poke.name}>
            <PokemonCard name={poke.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
