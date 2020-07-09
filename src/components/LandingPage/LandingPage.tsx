import React, { Component } from 'react'
import classes from './LandingPage.module.css';
import Aux from '../../hoc/Aux';
import Button from '../../elements/Button/Button';
import CompanyInfos from '../CompanyInfos/CompanyInfos';

const landingPage = (props: any) => (
        <div className={classes.LandingPage}>
            <div className={classes.Lang}>
                <Button type="lang" />
            </div>
            <div className={classes.Buttons}>          
                <Button type="signup" />
                <Button type="shopaccess" />
                <Button type="signin" />
            </div>
            <div className={classes.CompanyInfo}>
                <CompanyInfos show={props.showInfos}>
                    {props.showInfos ? <Button type="lessInfo" toggleInfos={props.toggleInfos} /> : <Button type="moreInfo" toggleInfos={props.toggleInfos} />}
                </CompanyInfos>
            </div>
        </div>
)

export default landingPage;