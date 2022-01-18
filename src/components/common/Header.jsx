import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core';
import logo from "../../assets/img/logo.png";

const Header = () => (
    <AppBar position='sticky'>
        <Toolbar>
            <img src={logo} alt="logo" width="150" height="50" />
            <h1>PokemonApp</h1>
        </Toolbar>
    </AppBar>
);
export default Header;
