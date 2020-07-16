import React from 'react';
import classes from './ShopProds.module.css';
import Button from '../../elements/Button/Button';
import PageControl from '../PageControl/PageControl';
import ProdsList from '../ProdsList/ProdsList';
import BrandsList from '../BrandsList/BrandsList';
import TypesList from '../TypesList/TypesList';
import SortsList from '../SortsList/SortsList';

const shopProds = (props: any) => {
    return(
        <div className={classes.ShopProds}>
            <div className={classes.FilterSort}>
                <div className={`${classes.Filter}`} >
                    <Button type="filter" />
                    <label>Filtre</label>
                </div>
                <div className={`${classes.Sort}`}>
                    <Button type="sort" />
                    <label>Tri</label>
                </div>
            </div>
{/*             <div className={classes.SortMenu}>
                <SortsList/>
            </div> */}
{/*         <div className={classes.FilterMenu}>
                <div className={classes.BrandFilter}>
                    <h4>Marque</h4>
                    <BrandsList/>
                </div>
                <div className={classes.TypeFilter}>
                    <h4>Type de Produit</h4>
                    <TypesList/>
                </div>
                <div className={classes.PriceFilter}>
                    <h4>Prix</h4>
                    <div>
                        
                    </div>
                </div>
            </div> */}
            <PageControl toggleView={props.toggleView} view={props.view}/>
            <ProdsList view={props.view.prodsView} />
            <PageControl toggleView={props.toggleView}  view={props.view} bottom />
        </div>
    );
}

export default shopProds;