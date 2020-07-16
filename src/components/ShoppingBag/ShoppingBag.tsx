import React from 'react';
import classes from './ShoppingBag.module.css';
import ShopBag from '../../elements/ShopBag/ShopBag';
import BagProds from '../BagProds/BagProds';
import Button from '../../elements/Button/Button';

const shoppingBag = (props: any) => {
    return (
        <div className={classes.ShoppingBag}>
            <div className={classes.SBHeader}>
                <ShopBag/>
            </div>
            <div className={classes.BagProds}>
                <BagProds/>
            </div>
            <div className={classes.Total}>
                <div></div>
                Total : 900 DA
                <div></div>
            </div>
            <div className={classes.SBFooter}>
                <Button type="showbag"/>
                <Button type="checkout"/>
            </div>
        </div>
    )
}

export default shoppingBag
