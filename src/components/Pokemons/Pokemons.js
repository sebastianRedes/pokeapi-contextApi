import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Pokemon from "./Pokemon";

const Pokemons = ({ pokemons }) => {
  console.log({ pokemons });
  return (
    <>
      <div>
        <Grid container spacing={3} justify="center">
          {pokemons.map((pokemon, i) => {
            //const { id, name, base_experience, front_shiny } = pokemon.results;

            return (
              <Pokemon
                key={i + Date.now()}
                pokemon={pokemon}
                //base_experience={base_experience}
                //front_shiny={front_shiny}
              />
            );
          })}
        </Grid>
      </div>
    </>
  );
};
export default Pokemons;
