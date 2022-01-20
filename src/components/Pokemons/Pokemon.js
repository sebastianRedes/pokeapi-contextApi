import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonPrimary from "./../common/ButtonPrimary";
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {
    console.log({pokemon});
    const { name, url } = pokemon;

    const [pokeInfo, setPokeInfo] = useState([]);

    useEffect(()=>{
        getPoke();
    },[]);
    
    const getPoke = async() => {
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log({data});
            setPokeInfo(data);
        } catch (error) {
            console.log(error);
        }
    }

    const { id, base_experience } = pokeInfo;

    return(
        <Grid item xs={12} sm={2}>
            <Link to={`/pokemon/detail/${id}`} >
                <Paper>
                    {/* <img src={front_shiny} alt={name} /> */}
                    <h3>{name}</h3>
                    <h2>base_experience: {base_experience}</h2>
                </Paper>
            </Link>

        </Grid>
    )
};

export default Pokemon;
