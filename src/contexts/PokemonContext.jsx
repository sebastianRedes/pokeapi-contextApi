import React, { createContext, useState, useEffect } from "react";
import { getPokemon } from "../constants";

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState();
  const [pokemonss, setPokemons] = useState([]);
  const id = window.location.pathname.split("/")[3];
  useEffect(() => {
    getMainPokemon();
  }, []);

  const getMainPokemon = (id) => {
    fetch(getPokemon())
      .then((res) => res.json())
      .then((data) => {
        setDoneFetch(true);
        setPokemons(data.results);
        console.log(data.results);
      })
      .catch((err) => console.log(err));
  };

  const randomPokemon = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <PokemonContext.Provider value={{ doneFetch, pokemonss }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
