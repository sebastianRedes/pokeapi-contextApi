const mostrar_20="limit=20";
const get_pokemon=`https://pokeapi.co/api/v2/pokemon?${mostrar_20}&offset=20`;

export const getPokemon =()=>`${get_pokemon}`;