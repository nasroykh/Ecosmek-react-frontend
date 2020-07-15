import React from 'react';
import classes from './ShopPage.module.css';
import Button from '../../elements/Button/Button';
import { NavLink } from 'react-router-dom';
import SearchInput from '../../elements/SearchInput/SearchInput';
import ShopCat from '../ShopCat/ShopCat';
import ShopProds from '../ShopProds/ShopProds';


const shopPage = (props: any) => {

    return(
        <div className={classes.ShopPage}>
            <h2>Boutique</h2>
			<SearchInput/>
            <div className={classes.CatBtns}>
                <Button type="catBtn">Parfums</Button>
                <Button type="catBtn">Make-Up</Button>
                <Button type="catBtn">Hygiène et Beauté</Button>
            </div>
            <ShopProds />
            {/* <ShopCat/> */}
        </div>
    );
}

export default shopPage;