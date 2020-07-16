import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../elements/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Toolbar from '../Toolbar/Toolbar';
import DrawerToggle from '../../elements/DrawerToggle/DrawerToggle';
import Button from '../../elements/Button/Button';
import LangButton from '../../elements/LangButton/LangButton';


const sideDrawer = (props: any) => {
    return(
        <div className={classes.SideDrawer}>
            <div className={classes.SDToolbar}>
                <DrawerToggle sd/>
                <Logo/>
            </div>
            <nav className={classes.Nav}>
                <NavItems/>
            </nav>
            <div className={classes.SDFooter}>
                <div>
                    <Button type="sdsignup"/>
                    <Button type="sdsignin"/>
                </div>
                <LangButton/>
            </div>
        </div>
    );
}

export default sideDrawer;