export default interface PokemonDetails {
  id: number;
  name: string;
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  move: {
    name: string;
  };
  types: {
    type: { name: string };
  }[];
}
