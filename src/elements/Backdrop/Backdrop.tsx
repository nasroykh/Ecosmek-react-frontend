import React from 'react'
import classes from './Backdrop.module.css';
import Aux from '../../hoc/Aux';

const backdrop = (props: any) => {
    return (
        <Aux>
            {props.show ? <div className={classes.Backdrop}></div> : null}
        </Aux>
    )
}

export default backdrop
