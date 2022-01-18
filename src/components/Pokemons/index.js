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
           (pokemons.length ? <Pokemons pokemons={pokemons} />:<h2>wefwe</h2>)
           :
          <ProgressBar/>
         }
      </Fragment>  
      </>
    );
};

export default Pokemonss;
