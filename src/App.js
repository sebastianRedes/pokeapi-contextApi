import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonContextProvider from "./contexts/PokemonContext";
import PokemonDetailContextProvider from "./contexts/PokemonDetailContext";
import Header from "./components/common/Header";

import Pokemon from "./components/Pokemons/Pokemons";
import PokemonDetail from "./components/PokemonsDetail";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <PokemonContextProvider>
          <Pokemon />
        </PokemonContextProvider>
      </Route>
      <Route path="/pokemon-detail">
        <PokemonDetailContextProvider>
          <PokemonDetail />
        </PokemonDetailContextProvider>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
//se aplica HOC linea 18 y 23, el arbol d datis se sobrepone al componente
