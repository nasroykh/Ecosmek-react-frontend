import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../elements/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Toolbar from '../Toolbar/Toolbar';
import DrawerToggle from '../../elements/DrawerToggle/DrawerToggle';
import Button from '../../elements/Button/Button';
import LangButton from '../../elements/LangButton/LangButton';
import { NavLink } from 'react-router-dom';


const sideDrawer = (props: any) => {
    return(
        <div className={`${classes.SideDrawer} ${props.sdShow ? classes.Open : classes.Close}`}>
            <div className={classes.SDToolbar}>
                <DrawerToggle sd sdToggle={props.sdToggle}/>
                <Logo/>
            </div>
            <nav className={classes.Nav}>
                <NavItems/>
            </nav>
            <div className={classes.SDFooter}>
                <div>
                    <NavLink to="/signup">
                        <Button type="sdsignup"/>
                    </NavLink>
                    <NavLink to="/signin">
                        <Button type="sdsignin"/>
                    </NavLink>
                </div>
                <LangButton/>
            </div>
        </div>
    );
}

export default sideDrawer;