import React from 'react';
import classes from './SignInPage.module.css';
import Input from '../../elements/Input/Input';
import Button from '../../elements/Button/Button';


const signInPage = (props: any) => {

    return(
        <div className={classes.SignInPage}>
            <div className={classes.SIinput}>
                <Input type="text" handleInput={props.handleInput} value={props.email} placeholder="Email"/>
                <Input type="password" handleInput={props.handleInput} value={props.password} placeholder="Mot de Passe"/>
            </div>
            <div className={classes.SUBtn}>
                <p>Vous êtes nouveau ?</p>
                <Button type="signup" />
            </div>
        </div>
    );
}

export default signInPage;