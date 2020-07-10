import React from 'react';
import classes from './LangChange.module.css';
import Button from '../../elements/Button/Button';

const langChange = () => (
    <div className={classes.Lang}>
        <Button type="lang" />
    </div>
)

export default langChange;