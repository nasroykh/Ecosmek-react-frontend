import React from 'react';
import classes from './ShopBag.module.css';
import bag from '../../assets/images/shopping-bag (1) 1.svg';

const shopBag = () => {
    return(
        <div className={classes.ShopBag}>
            <input type="image" src={bag} alt="Bag"/>
            <div className={classes.Count}>
                5
            </div>
        </div>
    )
}

export default shopBag;