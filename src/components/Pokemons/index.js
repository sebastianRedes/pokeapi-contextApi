import React,{Fragment, useContext} from 'react';
import { PokemonContext} from "./../../contexts/PokemonContext";
import Pokemons from './Pokemons';
import ProgressBar from '../common/ProgressBar';


const Pokemonss = () => {
    const {doneFetch,pokemons} = useContext(PokemonContext);
    return(

      <>
      <Fragment>
         {
           doneFetch ?  
           (<ProgressBar/>):(<Pokemons pokemons={pokemons} />)
         }
      </Fragment>  
      </>
    );
};

export default Pokemonss;
