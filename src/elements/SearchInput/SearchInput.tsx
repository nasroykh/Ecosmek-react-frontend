import React from 'react';
import classes from './SearchInput.module.css';
import searchicon from '../../assets/images/search 1.svg';

const searchInput = () => {
    return(
        <div className={classes.SearchInput}>
            <img src={searchicon} alt=""/>
            <input type="search" placeholder="Chercher un produit" name="" id=""/>
        </div>
    );
}

export default searchInput;
