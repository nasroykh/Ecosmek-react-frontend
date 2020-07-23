import React from 'react';
import classes from './Brand.module.css';
import brandLogo from '../../../assets/images/Adidas-Logo-880x660 1.svg';

const brand = (props: any) => {
    return (
        <div className={classes.Brand} >
            <input id={props.id} type="image" src={props.src} alt={props.alt} onClick={props.brandSel}/>
        </div>
    );
}

export default brand;