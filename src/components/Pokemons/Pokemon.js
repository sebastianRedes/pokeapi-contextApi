import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonPrimary from "./../common/ButtonPrimary";
import { Link } from "react-router-dom";

const Pokemon = ({ name, url }) => (
  <Grid item xs={12} sm={2}>
    <Paper>
      <h3>{name}</h3>
      <h2>{url}</h2>
    </Paper>
  </Grid>
);

export default Pokemon;
