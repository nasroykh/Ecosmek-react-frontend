import React from 'react';
import classes from './Type.module.css';
import Checkbox from '../../../elements/Checkbox/Checkbox';

const type = () => {
    return (
        <div className={classes.Type}>
            <label htmlFor="">Parfum</label>
            <Checkbox/>
        </div>
    )
}

export default type;
