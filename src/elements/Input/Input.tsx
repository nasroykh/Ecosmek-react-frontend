import React from 'react';
import classes from './Input.module.css';

const input = (props: any) => (
    <input type="text" placeholder={props.placeholder} name="" id="" className={classes.Input}/>
)

export default input;
