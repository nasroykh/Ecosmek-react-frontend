import React from 'react';
import classes from './HomeProds.module.css';
import Prod from '../ProdsList/Prod/Prod';

const homeProds = () => {
    return (
        <div className={classes.HomeProds}>
            <h2>Nos Nouveautés</h2>
            <p>Découvrez les produits beautés les plus récents</p>
            <div className={classes.Prods}>
                <Prod view="grid"/>
                <Prod view="grid"/>
                <Prod view="grid"/>
            </div>
        </div>
    );
}

export default homeProds;
