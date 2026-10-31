import PokemonList from "./PokemonList";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center p-1.5 items-center bg-linear-to-bl from-yellow-400 to-red-600">
      <div className="flex items-center justify-center gap-1">
        <h1 className="font-extrabold text-4xl ">PokeTeam</h1>
        <img
          className="size-10 object-contain"
          src="src/assets/Icone.webp"
          alt="Icone da PokeDex"
        />
      </div>
      <PokemonList />
    </div>
  );
}
