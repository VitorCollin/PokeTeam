import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";
import useAllPokemonNames from "../hooks/useAllPokemonNames";

const LIMIT: number = 20;

export default function PokemonList() {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * LIMIT;
  const { data, isLoading, error } = useAllPokemonNames();
  const [search, setSearch] = useState("");

  function handleNextPage() {
    setPage((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePreviousPage() {
    setPage((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSearchChange(value: string) {
    setSearch(value);
    setPage(1);
  }

  if (isLoading) return <p>Carregando Pokemons...</p>;

  if (error || !data) return <p>Erro ao carregar Pokemons</p>;

  const filtered = data.results.filter((poke) =>
    poke.name.includes(search.toLowerCase().trim()),
  );
  const pageItems = filtered.slice(offset, offset + LIMIT);
  const totalPages = Math.ceil(filtered.length / LIMIT);

  return (
    <div className="mx-auto w-full max-w-7xl p-4">
      <h1>PokeTeam</h1>
      <SearchBar value={search} onChange={handleSearchChange} />
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {pageItems.map((poke) => (
          <li key={poke.name}>
            <PokemonCard name={poke.name} />
          </li>
        ))}
      </ul>

      <nav
        aria-label="Paginação"
        className="mt-8 flex items-center justify-center gap-4"
      >
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white
           transition hover:bg-blue-700
           disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-600"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Anterior
        </button>
        <span className="text-pink-600">
          {page}/{totalPages}
        </span>
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white
           transition hover:bg-blue-700
           disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-600"
          onClick={handleNextPage}
          disabled={page >= totalPages}
        >
          Proxima
        </button>
      </nav>
    </div>
  );
}
