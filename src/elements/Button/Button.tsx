import React from 'react'
import classes from './Button.module.css';
import Aux from '../../hoc/Aux';
import next from '../../assets/images/next 1.svg';


const button = (props: any) => {
    let type: any = props.type;
    let btnType: any;

    switch (type) {
        case "lang":
            btnType = 
                <Aux>
                    <p className={classes.LangText}>Changer de langue</p>
                    <div className={classes.Lang}>
                        <div className={classes.Lang1}>
                            <a href ="/" >
                                Arabic
                            </a>
                        </div>
                        <div className={classes.Lang2}> 
                            <a href ="/" >
                                English
                            </a>
                        </div>
                    </div>
                </Aux>
            break;

        case "signup":
            btnType = 
                <Aux>
                    <p className={classes.LandingPageText}>Inscrivez vous et devenez un de nos fidèles clients.</p>
                    <p className={classes.LandingPageText}>C'est simple et rapide !</p>
                    <div className={classes.SignUpBtn}>
                        
                        <a href ="/" >
                            S'inscrire
                        </a>
                    </div>
                </Aux>
            break;

        case "shopaccess":
            btnType = 
                <div className={classes.ShopAccessBtn}>
                    <a href ="/" >
                        Access direct à la boutique
                    </a>
                </div>
            break;

        case "signin":
            btnType = 
                <Aux>
                    <p className={classes.LandingPageText}>Possedez vous déja un compte ?</p>
                    <div className={classes.SignInBtn}>
                        <a href ="/" >
                            Se connecter
                        </a>
                    </div>
                </Aux>
            break;

        case "moreInfo":
            btnType =
            <Aux>
                <input type="image" src={next} alt="next" className={classes.MoreInfo} onClick={props.toggleInfos}/>
            </Aux>
        break;

        case "lessInfo":
            btnType =
            <Aux>
                <input type="image" src={next} alt="next" className={classes.LessInfo}/>
            </Aux>
        break;

        default:
            break;
    }


    return(
        <Aux>
            {btnType}
        </Aux>
    );
}

export default button;