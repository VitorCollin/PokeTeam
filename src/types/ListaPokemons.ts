export interface ListaPokemons {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}
