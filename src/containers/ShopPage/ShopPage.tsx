import React, { Component } from 'react';
import classes from './ShopPage.module.css';
import Button from '../../elements/Button/Button';
import { NavLink } from 'react-router-dom';
import SearchInput from '../../elements/SearchInput/SearchInput';
import ShopCat from '../../components/ShopCat/ShopCat';
import ShopProds from '../../components/ShopProds/ShopProds';


class ShopPage extends Component {

    state = {
        View: {
            prodsView: "grid",
            gactive: true,
            lactive: false
        } 
    }

    toggleViewHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case "list":
                this.setState({View: {prodsView: "list", lactive: true, gactive: false}});
            break;
            
            case "grid":
                this.setState({View: {prodsView: "grid", gactive: true, lactive: false}});
            break;

            default:
                break;
        }
    }

    render() {
        return(
            <div className={classes.ShopPage}>
                <h2>Boutique</h2>
                <SearchInput/>
                <div className={classes.CatBtns}>
                    <Button type="catBtn">Parfums</Button>
                    <Button type="catBtn">Make-Up</Button>
                    <Button type="catBtn">Hygiène et Beauté</Button>
                </div>
                <ShopProds view={this.state.View} toggleView={this.toggleViewHandler} />
                {/* <ShopCat/> */}
            </div>
        );
    }
}

export default ShopPage;