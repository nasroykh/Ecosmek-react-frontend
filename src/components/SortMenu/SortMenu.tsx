import React from 'react';
import classes from './SortMenu.module.css';
import SortsList from '../SortsList/SortsList';

const sortMenu = (props: any) => {
    return (
        <div className={`${props.hide ? classes.Hide : classes.SortMenu}`}>
            <SortsList/>
        </div>
    )
}

export default sortMenu;
