import React from 'react'
import classes from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Button from '../../elements/Button/Button';
import { NavLink } from 'react-router-dom';
import CompanyInfos from '../CompanyInfos/CompanyInfos';
import BottomShape from '../../elements/BottomShape/BottomShape';

const layout = (props: any) => (
    <div className={classes.Content}>
        {props.sisu ? <Toolbar sisu1/> : <Toolbar/> }
        <main className={classes.Main}>
            {props.children}
        </main>
        <div className={classes.BackNext}>
            {props.sisu ? <NavLink to="/"><Button type="back"/></NavLink> : null}
            {props.sisu ? <NavLink to="#"><Button type="next" signUpIn={props.signUpIn}/></NavLink> : null}
        </div>
        {props.sisush ? null : <div className={classes.CompanyInfo}><CompanyInfos show /></div>}
{/*                 {props.sisush ? <BottomShape/> : null}
        {props.sisush ? <p className={classes.Copyright}>Copyright 2020 © Cosmekarn. All Rights Reserved.</p> : null} */}
    </div>
)

export default layout;