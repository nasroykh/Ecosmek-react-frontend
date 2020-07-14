import React from 'react'
import classes from './LandingPage.module.css';
import Button from '../../elements/Button/Button';
import CompanyInfos from '../CompanyInfos/CompanyInfos';
import LangChange from '../LangChange/LangChange';
import {NavLink} from 'react-router-dom';

const landingPage = (props: any) => (
    <div className={classes.LandingPage}>
        <LangChange />
        <div className={classes.Buttons}>    
            <p className={classes.LandingPageText}>Inscrivez vous et devenez un de nos fidèles clients.</p>
            <p className={classes.LandingPageText}>C'est simple et rapide !</p>      
            <NavLink to="/signup">
                <Button lp type="signup" />
            </NavLink>
            <NavLink to="/shop">
                <Button type="shopaccess" />
            </NavLink>
            <p className={classes.LandingPageText}>Possedez vous déja un compte ?</p> 
            <NavLink to="/signin">
                <Button lp type="signin" />
            </NavLink>
        </div>
        <div className={classes.CompanyInfo}>
            <CompanyInfos show={props.showInfos}>
                {props.showInfos ? <Button type="lessInfo" toggleInfos={props.toggleInfos} /> : <Button type="moreInfo" toggleInfos={props.toggleInfos} />}
            </CompanyInfos>
        </div>
    </div>
)

export default landingPage;