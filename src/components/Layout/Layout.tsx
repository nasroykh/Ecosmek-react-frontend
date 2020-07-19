import React from 'react'
import classes from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Button from '../../elements/Button/Button';
import { NavLink } from 'react-router-dom';
import CompanyInfos from '../CompanyInfos/CompanyInfos';
import BottomShape from '../../elements/BottomShape/BottomShape';
import Backdrop from '../../elements/Backdrop/Backdrop';
import SideDrawer from '../SIdeDrawer/SideDrawer';
import ShoppingBag from '../ShoppingBag/ShoppingBag';

const layout = (props: any) => (
    <div className={classes.Content}>
        <Backdrop bdShow={props.bdShow} hideBD={props.hideBD}/>
        <SideDrawer sdToggle={props.sdToggle} sdShow={props.sdShow}/>
        <ShoppingBag sbShow={props.sbShow} sbToggle={props.sbToggle}/>
        <Toolbar hideSB={props.hideSB} sdToggle={props.sdToggle} sbToggle={props.sbToggle}/>
        <main className={classes.Main}>
            {props.children}
        </main>
        <div className={classes.BackNext}>
            {props.backBtn ? <NavLink to="/"><Button type="back"/></NavLink> : null}
            {props.backNextBtn ? <NavLink to="/"><Button type="back"/></NavLink> : null}
            {props.backNextBtn ? <NavLink to="#"><Button type="next" signUpIn={props.signUpIn}/></NavLink> : null}
        </div>
        {props.hideCI ? null : <div className={classes.CompanyInfo}><CompanyInfos show /></div>}
        {props.showBS ? <BottomShape/> : null}
        {props.showBS ? <p className={classes.Copyright}>Copyright 2020 © Cosmekarn. All Rights Reserved.</p> : null}
    </div>
)

export default layout;