import React from 'react';
import classes from './ProdImage.module.css';
import prodimg from '../../assets/images/Deo-version-black-e1548437191234-2-300x300 1.svg';
import Aux from '../../hoc/Aux';

const prodImage = (props: any) => {
    let prodImage;
    
    switch (props.view) {
        case "grid":
            prodImage = (
                <div className={classes.ProdImageGrid}>
                    <img src={prodimg} alt="EDT Blue" width="70px"/>
                </div>
            )
        break;  
        
        case "list":
            prodImage = (
                <div className={classes.ProdImageList}>
                    <img src={prodimg} alt="EDT Blue" width="70px"/>
                </div>
            )
        break; 

        default:
            break;
    }
    return (
        <Aux>
            {prodImage}
        </Aux>
    );
};

export default prodImage;