import React from 'react';
import classes from './SortsList.module.css'
import Sort from './Sort/Sort';

const sortsList = () => {
    return (
        <div className={classes.SortsList}>
            <Sort/>
            <Sort/>
            <Sort/>
            <Sort/>
            <Sort/>
        </div>
    )
}

export default sortsList;
