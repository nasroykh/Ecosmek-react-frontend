import React from 'react'
import classes from './Button.module.css';
import Aux from '../../hoc/Aux';
import next from '../../assets/images/next 1.svg';
import nextArr from '../../assets/images/up-arrow 1.svg';
import filter from '../../assets/images/filter.svg';
import sort from '../../assets/images/sort 1.svg';
import pagebtn from '../../assets/images/nextpage.svg';
import list from '../../assets/images/list (1) 1.svg';
import grid from '../../assets/images/grid 1.svg';
import addbag from '../../assets/images/shopping-bag (1) 1.svg';
import doublenext from '../../assets/images/doublenext.svg';


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
                            <button>
                                Arabic
                            </button>
                        </div>
                        <div className={classes.Lang2}> 
                            <button>
                                English
                            </button>
                        </div>
                    </div>
                </Aux>
            break;

        case "signup":
            btnType = 
                <Aux>
                    <div className={props.lp ? classes.LPSignUpBtn : classes.SISignUpBtn}>
                        <button>
                            S'inscrire
                        </button>
                    </div>
                </Aux>
            break;

        case "sdsignup":
            btnType = 
                <Aux>
                    <div className={classes.SDSignUpBtn} onClick={props.sdToggle}>
                        <button>
                            S'inscrire
                        </button>
                        <div className={classes.UnderLine}></div>
                    </div>
                </Aux>
            break; 
            
        case "sdsignin":
            btnType = 
                <Aux>
                    <div className={classes.SDSignInBtn} onClick={props.sdToggle}>
                        <button>
                            Se connecter
                        </button>
                        <div className={classes.UnderLine}></div>
                    </div>
                </Aux>
            break;    

        case "shopaccess":
            btnType = 
                <div className={classes.ShopAccessBtn}>
                    <button>
                        Access direct à la boutique
                    </button>
                </div>
            break;

        case "signin":
            btnType = 
                <Aux>
                    <div className={props.lp ? classes.LPSignInBtn : classes.SUSignInBtn}>
                        <button>
                            Se connecter
                        </button>
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
                <input type="image" src={next} alt="next" className={classes.LessInfo} onClick={props.toggleInfos}/>
            </Aux>
        break;

        case "next":
            btnType = 
                <div className={classes.NextArr} onClick={props.signUpIn}>
                    <input type="image" src={nextArr} alt=""/>
                </div>
            break;
        
        case "back":
            btnType = 
                <div className={classes.BackArr}>
                    <input type="image" src={nextArr} alt=""/>
                </div>
        break;

        case "shopTitle":
            btnType = 
            <div className={classes.ShopTitle}>
                <button>{props.children}</button>
                <div></div>
            </div>
        break;

        case "filter":
            btnType = 
            <div className={classes.Filter}>
                <input type="image" src={filter} alt="Filter"/>
            </div>
        break;

        case "sort":
            btnType = 
            <div className={classes.Sort}>
                <input type="image" src={sort} alt="Sort"/>
            </div>
        break;

        case "backPage":
            btnType = 
            <div className={classes.BackP} onClick={props.paginate}>
                <input type="image" src={pagebtn} alt="Previous Page"/>
            </div>
        break;

        case "doubleBack":
            btnType = 
            <div className={classes.DBackP} onClick={props.paginate}>
                <input type="image" src={doublenext} alt="First Page"/>
            </div>
        break;

        case "nextPage":
            btnType = 
            <div className={classes.NextP} onClick={props.paginate}>
                <input type="image" src={pagebtn} alt="Next Page"/>
            </div>
        break;

        case "doubleNext":
            btnType = 
            <div className={classes.DNextP} onClick={props.paginate}>
                <input type="image" src={doublenext} alt="Last Page"/>
            </div>
        break;

        case "gridView":
            btnType = 
            <div className={props.gactive ? `${classes.Grid} ${classes.Active}` : classes.Grid}>
                <input type="image" src={grid} alt="GridView" name="grid" onClick={props.toggleView}/>
            </div>
        break;

        case "listView":
            btnType = 
            <div className={props.lactive ? `${classes.List} ${classes.Active}` : classes.List}>
                <input type="image" src={list} alt="ListView" name="list" onClick={props.toggleView}/>
            </div>
        break;

        case "addBag":
            btnType = 
            <div className={classes.AddBag}>
                <input type="image" src={addbag} alt="Add To Bag"/>
            </div>
        break;

        case "catBtn":
            btnType = 
            <div className={classes.CatBtn}>
                <label>{props.children}</label>
            </div>
        break;

        case "showbag":
            btnType = 
                <Aux>
                    <div className={classes.BagBtns}>
                        <button>
                            Afficher le panier
                        </button>
                        <div className={classes.UnderLine}></div>
                    </div>
                </Aux>
        break;   
        
        case "checkout":
            btnType = 
                <Aux>
                    <div className={classes.BagBtns}>
                        <button>
                            Proceder au paiement
                        </button>
                        <div className={classes.UnderLine}></div>
                    </div>
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