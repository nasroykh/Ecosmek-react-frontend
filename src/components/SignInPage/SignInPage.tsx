import React from 'react';
import classes from './SignInPage.module.css';
import Aux from '../../hoc/Aux';
import LangChange from '../LangChange/LangChange';
import Logo from '../../elements/Logo/Logo';
import BottomShape from '../../elements/BottomShape/BottomShape';
import Input from '../../elements/Input/Input';
import Button from '../../elements/Button/Button';
import { NavLink } from 'react-router-dom';


const signInPage = (props: any) => {

    return(
        <div className={classes.SignInPage}>
            <div className={classes.LangZone}>
                <LangChange/>
            </div>
            <div className={classes.SIinfos}>
                <Logo/>
                <div className={classes.SIinput}>
                    <Input placeholder="Email"/>
                    <Input placeholder="Mot de Passe"/>
                </div>
                <div className={classes.SUBtn}>
                    <p>Vous êtes nouveau ?</p>
                    <Button type="signup" />
                </div>
                <div className={classes.BackNext}>
                    <NavLink to="/">
                        <Button type="back"/>
                    </NavLink>
                    <Button type="next"/>
                </div>
                <p className={classes.Copyright}>Copyright 2020 © Cosmekarn. All Rights Reserved.</p>
				<BottomShape />
            </div>
        </div>
    );
}

export default signInPage;