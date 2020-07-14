import React from 'react';
import classes from './ShopPage.module.css';
import LangChange from '../LangChange/LangChange';
import Logo from '../../elements/Logo/Logo';
import BottomShape from '../../elements/BottomShape/BottomShape';
import Input from '../../elements/Input/Input';
import Button from '../../elements/Button/Button';
import { NavLink } from 'react-router-dom';
import Toolbar from '../Toolbar/Toolbar';
import SearchInput from '../../elements/SearchInput/SearchInput';


const shopPage = (props: any) => {

    return(
        <div className={classes.ShopPage}>
            <h2>Boutique</h2>
            <SearchInput/>
            <div className={classes.ShopTitles}>
                <div>
                    <Button type="shopTitle">Parfums</Button>
                    <Button type="shopTitle">Make-Up</Button>
                    <Button type="shopTitle">Hygiène et Beauté</Button>
                </div>
                <div>
                    <Button type="shopTitle">Afficher tout</Button>
                </div>
            </div>
        </div>
    );
}

export default shopPage;