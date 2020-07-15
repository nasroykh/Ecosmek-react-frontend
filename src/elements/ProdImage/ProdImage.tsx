import React from 'react';
import classes from './ProdImage.module.css';
import prodimg from '../../assets/images/Deo-version-black-e1548437191234-2-300x300 1.svg';

const prodImage = () => (
    <div className={classes.ProdImage}>
        <img src={prodimg} alt="EDT Blue" width="70px"/>
    </div>
);

export default prodImage;