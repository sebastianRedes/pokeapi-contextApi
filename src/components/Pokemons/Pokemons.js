import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Pokemon from "./Pokemon";

const Pokemons = ({ pokemonss }) => (
  <Fragment>
    <div>
      <Grid container spacing={3} justify="center">
        {pokemonss?.map((pokemon) => {
          const { name, url } = pokemon.results;

          return <Pokemon key={name} name={name} url={url} />;
        })}
      </Grid>
    </div>
  </Fragment>
);
export default Pokemons;
