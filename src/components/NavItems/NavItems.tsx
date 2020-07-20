import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';
import { NavLink } from 'react-router-dom';

const navItems = (props: any) => {
    return (
        <ul className={classes.NavItems} onClick={props.sdToggle}>
            <NavLink to="/home" exact activeStyle={{border: "1px solid white", borderBottom: "none", borderTop: "none", padding: "0 5px"}}>
                <NavItem>Accueil</NavItem>
            </NavLink>
            <NavLink to="/shop" exact activeStyle={{border: "1px solid white", borderBottom: "none", borderTop: "none", padding: "0 5px"}}>
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
