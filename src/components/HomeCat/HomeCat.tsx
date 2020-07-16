import React from 'react';
import classes from './HomeCat.module.css';
import catimage from '../../assets/images/CatImages.svg';

const homeCat = () => {
    return (
        <div className={classes.HomeCat}>
            <div className={classes.Cat}>
                <p>Make-Up</p>
            </div>
            <img src={catimage} alt=""/>
        </div>
    )
}

export default homeCat;