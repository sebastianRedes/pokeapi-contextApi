import React, { Fragment, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Pokemon from "./Pokemon";
import { PokemonContext } from "../../contexts/PokemonContext";

const Pokemons = () => {
  const { pokemonss } = useContext(PokemonContext)
  return(
  
      <Grid container spacing={3} justify="center">
        {pokemonss?.map((pokemon) => {
          const { name, url } = pokemon;
          return <Pokemon key={name} name={name} url={url} />;
        })}
      </Grid>
)}

export default Pokemons;
