import React from 'react';
import classes from './ProdImage.module.css';
import Aux from '../../hoc/Aux';

const prodImage = (props: any) => {
    let prodImage;

    let img = `data:image/svg;base64,${props.pimage}`;
    
    switch (props.view) {
        case "grid":
            prodImage = (
                <div className={classes.ProdImageGrid}>
                    <img src={img} alt="EDT Blue" width="70px"/>
                </div>
            )
        break;  
        
        case "list":
            prodImage = (
                <div className={classes.ProdImageList}>
                    <img src={img} alt="EDT Blue" width="70px"/>
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