import React from 'react';
import classes from './BagProd.module.css';
import prod from '../../../assets/images/Deo-version-black-e1548437191234-2-300x300 1.svg';
import add from '../../../assets/images/AddArticletoBag.svg';
import del from '../../../assets/images/delete 1.svg';

const bagProd = () => {
    return (
        <div className={classes.BagProd}>
            <img src={prod} alt=""/>
            <div className={classes.BagProdInfos}>
                <p>Eau de Toilette - Blue</p>
                <p>1 x 900 DA</p>
            </div>
            <input type="image" src={add} alt=""/>
            <input type="image" src={del} alt=""/>
        </div>
    )
}

export default bagProd;
