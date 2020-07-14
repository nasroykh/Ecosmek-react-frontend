import React from 'react';
import classes from './Input.module.css';

const input = (props: any) => (
    <input type={props.type} placeholder={props.placeholder} onChange={props.handleInput} value={props.value} className={classes.Input} required/>
)

export default input;
