export interface Pokemon {
  name: string;
  types: Type[];
  stats: Stat[];
  image: any;
}

interface Type {
  type: string;
}

interface Stat {
  base_stat: number;
  effort: number;
}
