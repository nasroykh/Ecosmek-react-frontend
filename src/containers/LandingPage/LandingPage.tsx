import React, { Component } from 'react'
import classes from './LandingPage.module.css';
import Aux from '../../hoc/Aux';
import Button from '../../elements/Button/Button';
import CompanyInfos from '../../components/CompanyInfos/CompanyInfos';

class LandingPage extends Component {
    render() {
        return (
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
                    <CompanyInfos />
                </div>
            </div>
        );
    }
}

export default LandingPage;