import React from 'react';
import classes from './ShopProds.module.css';
import Button from '../../elements/Button/Button';
import PageControl from '../PageControl/PageControl';
import ProdsList from '../ProdsList/ProdsList';
import BrandsList from '../BrandsList/BrandsList';
import TypesList from '../TypesList/TypesList';
import SortsList from '../SortsList/SortsList';
import FilterMenu from '../FilterMenu/FilterMenu';
import SortMenu from '../SortMenu/SortMenu';

const shopProds = (props: any) => {
    return(
        <div className={classes.ShopProds}>
            <div className={classes.FilterSort}>
                <div className={`${classes.Filter}`} onClick={props.filterMenuToggle} >
                    <Button type="filter" />
                    <label>Filtre</label>
                </div>
                <div className={`${classes.Sort}`} onClick={props.sortMenuToggle}>
                    <Button type="sort" />
                    <label>Tri</label>
                </div>
            </div>
            <SortMenu hide={!props.showSorts}/>
            <FilterMenu hide={!props.showFilters}/>
            <PageControl 
                toggleView={props.toggleView} 
                view={props.view}
                totalProducts={props.totalProducts}
                productsPerPage={props.productsPerPage}
                currentPage={props.currentPage}
                firstPage={props.firstPage}
                backPage={props.backPage}
                nextPage={props.nextPage}
                lastPage={props.lastPage}/>
            <ProdsList view={props.view.prodsView} products={props.products} />
            <PageControl 
                toggleView={props.toggleView}  
                view={props.view} 
                bottom 
                totalProducts={props.totalProducts}
                productsPerPage={props.productsPerPage}
                currentPage={props.currentPage}
                firstPage={props.firstPage}
                backPage={props.backPage}
                nextPage={props.nextPage}
                lastPage={props.lastPage} />
        </div>
    );
}

export default shopProds;