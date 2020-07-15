import React from 'react';
import classes from './PageControl.module.css';
import Button from "../../elements/Button/Button";

const pageControl = (props: any) => {
    return(
        <div className={classes.PageControl}>
            <p>Page 1 - 10</p>
            <div className={classes.PageBtns}>
                {props.bottom ? <Button type="doubleBack" /> : null}
                <Button type="backPage" />
                <Button type="nextPage" />
                {props.bottom ? <Button type="doubleNext" /> : null}
            </div>
            <div className={classes.PageView}>
                <Button type="listView" />
                <Button type="gridView" />
            </div>
        </div>
    );
} 

export default pageControl;