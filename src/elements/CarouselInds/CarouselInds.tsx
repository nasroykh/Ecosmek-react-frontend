import React from 'react'
import classes from './CarouselInds.module.css'
import CarouselInd from './CarouselInd/CarouselInd';

const carouselInds = () => {
    return (
        <div className={classes.CarouselInds}>
            <CarouselInd active/>
            <CarouselInd />
            <CarouselInd />
            <CarouselInd />
        </div>
    )
}

export default carouselInds;
