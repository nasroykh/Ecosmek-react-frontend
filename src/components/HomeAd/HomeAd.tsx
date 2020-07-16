import React from 'react';
import classes from './HomeAd.module.css';
import ad from '../../assets/images/bat.jpg';

const homeAd = () => {
    return (
        <div className={classes.HomeAd}>
            <div className={classes.AdText}>
                <div>
                    <p>Découvrir la gamme Batiste</p>
                </div>
            </div>
            <img src={ad} alt="" />
        </div>
    )
}

export default homeAd
