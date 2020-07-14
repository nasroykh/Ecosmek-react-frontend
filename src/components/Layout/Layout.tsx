import React from 'react'
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import BottomShape from '../../elements/BottomShape/BottomShape';
import Toolbar from '../Toolbar/Toolbar';
import Button from '../../elements/Button/Button';
import LangChange from '../LangChange/LangChange';
import { NavLink } from 'react-router-dom';

const layout = (props: any) => (
    <div className={classes.Content}>
        {props.sisu ? <Toolbar sisu1/> : <Toolbar/> }
        <main className={classes.Main}>
            {props.children}
        </main>
        <div className={classes.BackNext}>
            <NavLink to="/">
                <Button type="back"/>
            </NavLink>
            <NavLink to="#">
                <Button type="next"/>
            </NavLink>
        </div>
        <BottomShape/>
        <p className={classes.Copyright}>Copyright 2020 © Cosmekarn. All Rights Reserved.</p>
    </div>
)

export default layout;