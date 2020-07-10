import React from 'react';
import classes from './SignUpPage.module.css';
import Aux from '../../hoc/Aux';
import LangChange from '../LangChange/LangChange';
import Logo from '../../elements/Logo/Logo';
import BottomShape from '../../elements/BottomShape/BottomShape';
import Input from '../../elements/Input/Input';
import Button from '../../elements/Button/Button';
import Radio from '../../elements/Radio/Radio';
import { NavLink } from 'react-router-dom';

const signUpPage = (props: any) => {

    return(
        <div className={classes.SignUpPage}>
            <div className={classes.LangZone}>
                <LangChange/>
            </div>
            <div className={classes.SUinfos}>
                <Logo/>
                <div className={classes.SUinputs}>
                    <div className={classes.SUinput}>
                        <Input placeholder="Nom"/>
                        <Input placeholder="Email"/>
                        <Input placeholder="Mot de Passe"/>
                    </div>
                    <div className={classes.Radio}>
                        <div className={classes.RdMan}>
                            <p>Homme</p>
                            <Radio/>
                        </div>
                        <div className={classes.RdWom}>
                            <p>Femme</p>
                            <Radio/>
                        </div>
                    </div>
                </div>
                <div className={classes.SIBtn}>
                    <p>Possedez vous déja un compte ?</p>
                    <Button type="signin" />
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

export default signUpPage;