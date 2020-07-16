import React from 'react';
import classes from './CarouselInd.module.css';

const carouselInd = (props: any) => {
    return (
        <div className={props.active ? classes.CarouselInd : classes.CarouselIndEmp}></div>
    )
}

export default carouselInd;
