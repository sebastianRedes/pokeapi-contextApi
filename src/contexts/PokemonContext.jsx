import React, {createContext, useState, useEffect} from 'react';
import {getPokemon} from "../constants";


export const PokemonContext = createContext();

const PokemonContextProvider = ({children}) => {
    const [doneFetch, setDoneFetch] = useState(true)
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        getMainPokemon();
    },[]);
    
    const getMainPokemon = ()=>{
        fetch(getPokemon())
        .then(res => res.json())
        .then(({results}) =>{
            setPokemons(results);
            setDoneFetch(false);
        })
        .catch(err => console.log(err));
    }

    return (
        <PokemonContext.Provider value={{doneFetch,pokemons}}>
            {children}
        </PokemonContext.Provider>

    );
};

export default PokemonContextProvider;
