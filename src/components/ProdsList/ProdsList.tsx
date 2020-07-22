import React from 'react';
import classes from './ProdsList.module.css';
import Prod from './Prod/Prod';
import Aux from '../../hoc/Aux';

const prodsList = (props: any) => {
    let prods;

    const products = props.products.map((product: { name: any; brand: any; price: any; img: any }, index: any) => {
        return(
        <li key={index}>
            <Prod view={props.view} pname={product.name} pbrand={product.brand} pprice={product.price} pimage={product.img} />
        </li>
        );
    })

    switch (props.view) {
        case "grid":
            prods = (
                <ul className={classes.ProdsListGrid}>
                    {products}
                </ul>
            );
            break;

        case "list":
            prods= (
                <ul className={classes.ProdsListList}>
                    {products}
                </ul>
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