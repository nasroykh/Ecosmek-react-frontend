import React from 'react';
import classes from './ProdsList.module.css';
import Prod from './Prod/Prod';
import Aux from '../../hoc/Aux';

const prodsList = (props: any) => {
    let prods;

    switch (props.view) {
        case "grid":
            prods = (
                <div className={classes.ProdsList}>
                    <div className={classes.ProdsLine}>
                        <Prod view={props.view}/>
                        <Prod view={props.view}/>
                        <Prod view={props.view}/>
                    </div>
                    <div className={classes.ProdsLine}>
                        <Prod view={props.view}/>
                        <Prod view={props.view}/>
                        <Prod view={props.view}/>
                    </div>
                    <div className={classes.ProdsLine}>
                        <Prod view={props.view}/>
                        <Prod view={props.view}/>
                        <Prod view={props.view}/>
                    </div>
                </div>
            );
            break;

        case "list":
            prods= (
                <div className={classes.ProdsList}>
                    <Prod view={props.view}/>
                    <Prod view={props.view}/>
                    <Prod view={props.view}/>
                    <Prod view={props.view}/>
                    <Prod view={props.view}/>
                    <Prod view={props.view}/>
                </div>
            );
            break;
    
        default:
            break;
    }

    return(
        <Aux>
            {prods}
        </Aux>
    );
}

export default prodsList;