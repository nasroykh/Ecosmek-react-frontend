import React from 'react';
import classes from './Type.module.css';
import Checkbox from '../../../elements/Checkbox/Checkbox';

const type = (props: any) => {
    return (
        <div className={classes.Type}>
            <label htmlFor="">{props.type}</label>
            <Checkbox/>
        </div>
    )
}

export default type;
