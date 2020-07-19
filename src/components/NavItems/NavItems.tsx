import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';
import { NavLink } from 'react-router-dom';

const navItems = () => {
    return (
        <ul className={classes.NavItems}>
            <NavLink to="/home" exact activeStyle={{backgroundColor: "pink"}}>
                <NavItem>Accueil</NavItem>
            </NavLink>
            <NavLink to="/shop" exact activeStyle={{backgroundColor: "pink"}}>
                <NavItem>Boutique</NavItem>
            </NavLink>
            <NavLink to="#">
                <NavItem>Contact</NavItem>
            </NavLink>
            <NavLink to="#">
                <NavItem>A propos de nous</NavItem>
            </NavLink>
            <NavLink to="#">
                <NavItem>Profile</NavItem>
            </NavLink>
            <NavLink to="#">
                <NavItem>Carrières</NavItem>
            </NavLink>
        </ul>
    )
}

export default navItems;
