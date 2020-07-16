import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = () => {
    return (
        <ul className={classes.NavItems}>
            <NavItem>Accueil</NavItem>
            <NavItem>Boutique</NavItem>
            <NavItem>Profile</NavItem>
            <NavItem>Contact</NavItem>
            <NavItem>A propos de nous</NavItem>
            <NavItem>Carrières</NavItem>
        </ul>
    )
}

export default navItems;
