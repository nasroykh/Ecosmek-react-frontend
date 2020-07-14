import React from 'react';
import classes from './SignUpPage.module.css';
import Input from '../../elements/Input/Input';
import Button from '../../elements/Button/Button';
import Radio from '../../elements/Radio/Radio';

const signUpPage = (props: any) => {
    return(
        <div className={classes.SignUpPage}>
            <div className={classes.SUinputs}>
                <div className={classes.SUinput}>
                    <Input type="text" handleInput={props.handleInput} value={props.fullName} placeholder="Nom"/>
                    <Input type="email" handleInput={props.handleInput} value={props.email} placeholder="Email"/>
                    <Input type="password" handleInput={props.handleInput} value={props.password} placeholder="Mot de Passe"/>
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
        </div>
    );

}

export default signUpPage;