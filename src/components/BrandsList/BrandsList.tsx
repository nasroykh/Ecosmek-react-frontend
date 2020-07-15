import React from 'react';
import classes from './BrandsList.module.css';
import Brand from './Brand/Brand';

const brandsList = () => {
    return(
        <div className={classes.BrandsList}>
            <Brand/>
            <Brand/>
            <Brand/>
            <Brand/>
            <Brand/>
            <Brand/>
            <Brand/>
        </div>
    );
}

export default brandsList;