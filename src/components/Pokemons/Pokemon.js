import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonPrimary from "./../common/ButtonPrimary";
import { Link } from 'react-router-dom';

const Pokemon = ({ id,
    name,
    base_experience,
    front_shiny }) => {
    <Grid item xs={12} sm={2}>
        <Link to={`/pokemon/detail/${id}`}>
            <Paper>
                <img src={front_shiny} alt={name} />
                <h3>{name}</h3>
                <h2>{base_experience}</h2>
            </Paper>
        </Link>

    </Grid>
};

export default Pokemon;
