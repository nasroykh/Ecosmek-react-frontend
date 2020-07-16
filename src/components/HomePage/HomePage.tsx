import React from 'react';
import classes from './HomePage.module.css';
import SearchInput from '../../elements/SearchInput/SearchInput';
import HomeAd from '../HomeAd/HomeAd';
import CarouselInds from '../../elements/CarouselInds/CarouselInds';
import HomeCat from '../HomeCat/HomeCat';
import HomeProds from '../HomeProds/HomeProds';

const homePage = (props: any) => {
    return (
        <div className={classes.HomePage}>
            <h2 className={classes.PageTitle}>Accueil</h2>
            <SearchInput/>
            <HomeAd/>
            <CarouselInds/>
            <div className={classes.HomeBreakLine}></div>
            <HomeCat/>
            <CarouselInds/>
            <div className={classes.HomeBreakLine}></div>
            <HomeProds/>
            <CarouselInds/>
            <div className={classes.HomeBreakLine}></div>
            <HomeProds/>
            <CarouselInds/>
            <div className={classes.HomeBreakLine}></div>
            <HomeProds/>
            <CarouselInds/>
        </div>
    )
}

export default homePage;
