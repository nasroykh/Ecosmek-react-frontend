import React from 'react';
import classes from './CompanyInfos.module.css';
import Aux from '../../hoc/Aux';
import Logo from '../../elements/Logo/Logo';
import fb from '../../assets/images/facebook 1.svg';
import insta from '../../assets/images/instagram 1.svg';
import lin from '../../assets/images/linkedin 1.svg';
import Button from '../../elements/Button/Button';

const companyInfos = () => {

    let moreInfo = false;

    let infos = (<Aux>
        <div className={classes.LogoAndInfo}>
            <div className={classes.InfoBtn}>
                <Button type="moreInfo"></Button>
            </div>
        <Logo />
        </div>
        <p className={classes.Copyright}>Copyright 2020 © Cosmekarn. All Rights Reserved.</p>
    </Aux>);




    let toggleCompanyInfos = () => {
        moreInfo = !moreInfo;
    }

    return (
        <Aux>
            <div className={classes.LogoAndInfo}>
                <Logo />
                <p>IMPORTATEUR ET DISTRIBUTEUR EXCLUSIF DES PRODUITS COSMÉTIQUES & HYGIÈNE CORPORELLE</p>
            </div>
            <div className={classes.AdressSocAndBtn}>
                <div className={classes.Adress}>
                    <p>5 Rue Souidi Mohammed Oran Algérie 31000</p>
                    <p>(+213) 041 21 22 50</p>
                    <p>info@cosmekarn.dz</p>
                    <p>08:00 - 17:00</p>
                </div>
                <div className={classes.SocAndBtn}>
                    <div className={classes.SocNet}>
                        <img src={fb} alt="Facebook"/>
                        <img src={insta} alt="Instagram"/>
                        <img src={lin} alt="Linkedin"/>
                    </div>
                    <Button type="lessInfo" toggleInfos={toggleCompanyInfos}></Button>
                </div>
            </div>
            <p className={classes.Copyright}>Copyright 2020 © Cosmekarn. All Rights Reserved.</p>
        </Aux>
    )
}

export default companyInfos;