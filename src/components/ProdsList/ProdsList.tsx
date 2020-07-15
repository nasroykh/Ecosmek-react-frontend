import React from 'react';
import classes from './ProdsList.module.css';
import Prod from './Prod/Prod';

const prodsList = (props: any) => {
    return(
        <div className={classes.ProdsList}>
            <div className={classes.ProdsLine}>
                <Prod/>
                <Prod/>
                <Prod/>
            </div>
            <div className={classes.ProdsLine}>
                <Prod/>
                <Prod/>
                <Prod/>
            </div>
            <div className={classes.ProdsLine}>
                <Prod/>
                <Prod/>
                <Prod/>
            </div>
        </div>
    );
}

export default prodsList;