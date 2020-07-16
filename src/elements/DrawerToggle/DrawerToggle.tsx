import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props: any) => {
    return(
        <div className={props.sd ? classes.SDDrawerToggle : classes.DrawerToggle}>
            <div></div>
            <div></div>
        </div>
    );
}

export default drawerToggle;