import React from 'react';
import classes from './Brand.module.css';
import brandLogo from '../../../assets/images/Adidas-Logo-880x660 1.svg';

const brand = () => {
    return (
        <div className={classes.Brand}>
            <input type="image" src={brandLogo} alt="Adidas"/>
        </div>
    );
}

export default brand;