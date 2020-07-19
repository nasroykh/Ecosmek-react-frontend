import React from 'react';
import classes from './PageControl.module.css';
import Button from "../../elements/Button/Button";

const pageControl = (props: any) => {
    let pageNumbers = Math.ceil(props.totalProducts / props.productsPerPage);
    return(
        <div className={classes.PageControl}>
            <p>Page {props.currentPage} - {pageNumbers}</p>
            <div className={classes.PageBtns}>
                {props.bottom ? <Button type="doubleBack" paginate={props.firstPage} /> : null}
                <Button type="backPage" paginate={props.backPage} />
                <Button type="nextPage" paginate={props.nextPage} />
                {props.bottom ? <Button type="doubleNext" paginate={props.lastPage} /> : null}
            </div>
            <div className={classes.PageView}>
                <Button type="listView" toggleView={props.toggleView}  lactive={props.view.lactive} />
                <Button type="gridView" toggleView={props.toggleView}  gactive={props.view.gactive} />
            </div>
        </div>
    );
} 

export default pageControl;