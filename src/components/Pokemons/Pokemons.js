import React, { Fragment } from 'react';
import  Grid  from '@material-ui/core/Grid';
import Pokemon from "./Pokemon";


const Pokemons = ({ pokemons }) => (
    <Fragment>
        <div>
            <Grid container spacing={3} justify="center">
                { 
                pokemons.map(pokemon => {
                    const {id, name, base_experience, front_shiny} = pokemon.results;

                    return(
                        <Pokemon
                            key={id}
                            name={name}
                            base_experience={base_experience}
                            front_shiny={front_shiny}
                        />
                    );
                })
                
                }
                
            </Grid>
        </div>
    </Fragment>
);
export default Pokemons;
