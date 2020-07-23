import React from 'react';
import classes from './TypesList.module.css';
import Type from './Type/Type';

const typesList = (props: any) => {
    return (
        <div className={classes.TypesList}>
            <Type type="Parfum"/>
            <Type type="Déo"/>
            <Type type="Coffret"/>
        </div>
    )
}

export default typesList;
