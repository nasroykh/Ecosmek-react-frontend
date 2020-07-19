import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../elements/Logo/Logo';
import DrawerToggle from '../../elements/DrawerToggle/DrawerToggle';
import ShopBag from '../../elements/ShopBag/ShopBag';
import { NavLink } from 'react-router-dom';


const toolbar = (props: any) => {
    return(
        <div className={props.sisu1 ? classes.SiSuToolbar : classes.Toolbar}>
            {props.sisu1 ? null : <DrawerToggle sdToggle={props.sdToggle} />}
            <NavLink to="/">
                <Logo />
            </NavLink>
            {props.hideSB ? null : <ShopBag sbToggle={props.sbToggle}/>}
        </div>
    );
}


export default toolbar;