import React from 'react';
import classes from './LangButton.module.css';
import lang from '../../assets/images/translator.svg';

const langButton = () => {
    return (
        <div className={classes.LangButton}>
            <input type="image" src={lang} alt="Language Change"/>
        </div>
    )
}

export default langButton;
