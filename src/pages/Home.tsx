import PokemonList from "./PokemonList";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center p-1.5 items-center bg-radial-[at_25%_25%] from-blue-300 to-blue-600 to-75%">
      <div className="flex items-center justify-center gap-1">
        <h1 className="font-extrabold text-6xl ">PokeTeam</h1>
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
