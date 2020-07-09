import React from 'react';
import classes from './CompanyInfos.module.css';
import Aux from '../../hoc/Aux';
import Logo from '../../elements/Logo/Logo';
import fb from '../../assets/images/facebook 1.svg';
import insta from '../../assets/images/instagram 1.svg';
import lin from '../../assets/images/linkedin 1.svg';
import Button from '../../elements/Button/Button';

const companyInfos = (props: any) => {
/* 
    let moreInfos = (
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
                    <input type="image" src={fb} alt="Facebook"/>
                    <input type="image" src={insta} alt="Instagram"/>
                    <input type="image" src={lin} alt="Linkedin"/>
                </div>
                <Button type="lessInfo"></Button>
            </div>
        </div>
        <p className={classes.Copyright}>Copyright 2020 © Cosmekarn. All Rights Reserved.</p>
    </Aux>
    ) */

    let infos = (    
        <Aux>
            <div className={classes.LogoAndInfoLI}>
                {props.children}
                <Logo />
            </div>
            <p className={classes.Copyright}>Copyright 2020 © Cosmekarn. All Rights Reserved.</p>
        </Aux>);

    if (props.show) {
        infos = (<div className={classes.CompanyMoreInfos}>
            <div className={classes.LogoAndInfoMI}>
                <Logo />
                <p>IMPORTATEUR ET DISTRIBUTEUR<br/>EXCLUSIF DES PRODUITS<br/>COSMÉTIQUES & HYGIÈNE<br/>CORPORELLE</p>
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
                        <input type="image" src={fb} alt="Facebook"/>
                        <input type="image" src={insta} alt="Instagram"/>
                        <input type="image" src={lin} alt="Linkedin"/>
                    </div>
                    {props.children}
                </div>
            </div>
            <p className={classes.Copyright}>Copyright 2020 © Cosmekarn. All Rights Reserved.</p>
        </div>);
    }

    return (
        <Aux>
            {infos}
        </Aux>
    )
}

export default companyInfos;