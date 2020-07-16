import React from 'react'
import classes from './Sort.module.css'

const sort = () => {
    return (
        <div className={classes.Sort}>
            <label htmlFor="">Alphabétique</label>
            <div>A - Z</div>
            <div>Z - A</div>
        </div>
    )
}

export default sort
