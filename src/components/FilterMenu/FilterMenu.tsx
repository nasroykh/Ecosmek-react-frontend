import React from 'react';
import classes from './FilterMenu.module.css';
import BrandsList from '../BrandsList/BrandsList';
import TypesList from '../TypesList/TypesList';

const filterMenu = (props: any) => {
    return (
        <div className={`${props.hide ? classes.Hide : classes.FilterMenu}`}>
            <div className={classes.BrandFilter}>
                    <h4>Marque</h4>
                    <BrandsList/>
                </div>
                <div className={classes.TypeFilter}>
                    <h4>Type de Produit</h4>
                    <TypesList/>
                </div>
                <div className={classes.PriceFilter}>
                    <h4>Prix</h4>
                    <div>
                        
                    </div>
            </div>
        </div>
    )   
}   

export default filterMenu;   
