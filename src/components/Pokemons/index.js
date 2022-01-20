import React, { Fragment, useContext } from "react";
import { PokemonContext } from "./../../contexts/PokemonContext";
import Pokemons from "./Pokemons";
import ProgressBar from "../common/ProgressBar";

const Pokemonss = () => {
  const { doneFetch, pokemonss } = useContext(PokemonContext);
  return (
    <>
      <Fragment>
        {doneFetch ? (
          pokemonss.length ? (
            <Pokemons pokemons={pokemonss} />
          ) : (
            <h2>wefwe</h2>
          )
        ) : (
          ((<ProgressBar />), console.log(pokemonss))
        )}
      </Fragment>
    </>
  );
};

export default Pokemonss;
