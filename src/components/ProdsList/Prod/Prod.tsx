import React from 'react';
import classes from './Prod.module.css';
import ProdImage from '../../../elements/ProdImage/ProdImage';
import Button from '../../../elements/Button/Button';
import Aux from '../../../hoc/Aux';

const prod = (props: any) => {
    let prod;

    switch (props.view) {
        case "grid":
            prod = (
                <div className={classes.ProdGrid}>
                    <ProdImage view={props.view}/>
                    <div className={classes.ProdInfosGrid}>
                        <p className={classes.PName}>Eau de Toilette - Blue</p>
                        <p className={classes.PBrand}>Ulric De Varens</p>
                        <p className={classes.PPrice}>900DA</p>
                    </div>
                    <Button type="addBag" />
                </div>
            )
        break;

        case "list":
            prod = (
                <div className={classes.ProdList}>
                    <ProdImage view={props.view}/>
                    <div className={classes.ProdInfosList}>
                        <p className={classes.PName}>Eau de Toilette - Blue</p>
                        <p className={classes.PBrand}>Ulric De Varens</p>
                        <p className={classes.PPrice}>900DA</p>
                    </div>
                    <Button type="addBag" />
                </div>
            )
        break;
        
    
        default:
            break;
    }
    return(
        <Aux>
            {prod}
        </Aux>
    );
}

export default prod;