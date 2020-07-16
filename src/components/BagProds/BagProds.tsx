import React from 'react';
import classes from './BagProds.module.css';
import BagProd from './BagProd/BagProd';

const bagProds = () => {
    return (
        <div className={classes.BagProds}>
            <BagProd/>
            <BagProd/>
            <BagProd/>
            <BagProd/>
            <BagProd/>
        </div>
    )
}

export default bagProds;