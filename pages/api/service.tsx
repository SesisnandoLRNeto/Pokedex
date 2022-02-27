export async function getPokemonList(url: string = '') {
  const API_POKEMON_BASE_URL_V2 = `https://pokeapi.co/api/v2/pokemon/${url}`;
  const get = await fetch(API_POKEMON_BASE_URL_V2);
  return get.json();
}
