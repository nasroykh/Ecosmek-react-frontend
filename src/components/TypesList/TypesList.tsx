import React from 'react';
import classes from './TypesList.module.css';
import Type from './Type/Type';

const typesList = () => {
    return (
        <div className={classes.TypesList}>
            <Type/>
            <Type/>
            <Type/>
        </div>
    )
}

export default typesList;
