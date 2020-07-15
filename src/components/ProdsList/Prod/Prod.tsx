import React from 'react';
import classes from './Prod.module.css';
import ProdImage from '../../../elements/ProdImage/ProdImage';
import Button from '../../../elements/Button/Button';

const prod = () => {
    return(
        <div className={classes.Prod}>
            <ProdImage />
            <div className={classes.ProdInfos}>
                <p className={classes.PName}>Eau de Toilette - Blue</p>
                <p className={classes.PBrand}>Ulric De Varens</p>
                <p className={classes.PPrice}>900DA</p>
            </div>
            <Button type="addBag" />
        </div>
    );
}

export default prod;