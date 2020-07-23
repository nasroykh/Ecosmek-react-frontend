import React, { Component, ChangeEvent } from 'react';
import classes from './ShopPage.module.css';
import Button from '../../elements/Button/Button';
import { NavLink } from 'react-router-dom';
import SearchInput from '../../elements/SearchInput/SearchInput';
import ShopCat from '../../components/ShopCat/ShopCat';
import ShopProds from '../../components/ShopProds/ShopProds';
import axios from '../../axios-ck';


class ShopPage extends Component {

    state = {
        View: {
            prodsView: "grid",
            gactive: true,
            lactive: false
        },
        showFilterMenu: false,
        showSortMenu: false,
        products: [],
        loading: false,
        currentPage: 1,
        productsPerPage: 5,
        brands: [],
        type: [],
        categorySel: {
            perfume: false,
            makeup: false,
            hygiene: false
        }
    }

    productsRendered = new Array();

    catSelHandler = (id: String) => {
        let newProducts= new Array();
        switch (id) {
            case "perfume":
                this.productsRendered.map(product => {
                    if (product.category === "Parfume") {
                        newProducts.push(product);
                    }
                });
                this.setState({categorySel: {perfume: true, makeup: false, hygiene: false}, products: newProducts});
            break;
        
            case "makeup":
                this.productsRendered.map(product => {
                    if (product.category === "MakeUp") {
                        newProducts.push(product);
                    }
                });
                this.setState({categorySel: {perfume: false, makeup: true, hygiene: false}, products: newProducts});
            break;
            
            case "hygiene":
                this.productsRendered.map(product => {
                    if (product.category === "Hygiene") {
                        newProducts.push(product);
                    }
                });
                this.setState({categorySel: {perfume: false, makeup: false, hygiene: true}, products: newProducts});
            break;
            
            default:
                break;
        }
        this.setState({state: this.state});
    }

    brandSelHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let brand = event.target.id;
        let currentBrands: string[]= this.state.brands;

        if (currentBrands.includes(brand)) {
            let indexBrand = currentBrands.indexOf(brand);
            currentBrands.splice(indexBrand, 1);
            this.setState({brands: currentBrands});
        }
        else {
            currentBrands.push(brand);
            this.setState({brands: currentBrands});
        }

        console.log(this.state.brands);
    }   

    componentDidMount() {
/*         if (this.state.categorySel.perfume ||
            this.state.categorySel.makeup ||
            this.state.categorySel.hygiene) {
                console.log("hi2");
        } */
        axios.get("/products")
        .then(res => {
            let renderedProducts = res.data;
            this.productsRendered = res.data;
            this.setState({products: renderedProducts});
            console.log(this.state.products);
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
        let searchValue = {wordskey: event.target.value.toLowerCase()};
        
        axios.post('/find_products_by_words', searchValue)
        .then(res => {
            let searchedProds = res.data;
            this.setState({products: searchedProds});
        })
        .catch(err => {
            console.log(err);
        })
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

    filterMenuToggle = () => {
        let filterMenuState = this.state.showFilterMenu;
        this.setState({showFilterMenu: !filterMenuState});
    }

    sortMenuToggle = () => {
        let sortMenuState = this.state.showSortMenu;
        this.setState({showSortMenu: !sortMenuState});

    }

    toFirstPageHandler = () => {
        this.setState({currentPage: 1})
    }


    toBackPageHandler = () => {
        if (this.state.currentPage > 1) {
            let nextPage= this.state.currentPage - 1;
            this.setState({currentPage: nextPage});
        }
    }


    toNextPageHandler = () => {
        if (this.state.currentPage < this.pageNumbers) {
            let backPage= this.state.currentPage + 1;
            this.setState({currentPage: backPage});
        }        
    }


    toLastPageHandler = () => {
        this.setState({currentPage: this.pageNumbers})
        
    }

    pageNumbers = Math.ceil(this.state.products.length / this.state.productsPerPage);


    render() {
        
        let indexOfLastProduct = this.state.currentPage * this.state.productsPerPage;
        let indexOfFirstProduct = indexOfLastProduct - this.state.productsPerPage;
        let currentProducts = this.state.products.slice(indexOfFirstProduct, indexOfLastProduct);
        
        return(
            <div className={classes.ShopPage}>
                <h2>Boutique</h2>
                <SearchInput searchChange={this.handleInputSearch} />
                <div className={classes.CatBtns}>
                    <Button type="catBtn" catSel={() => this.catSelHandler("perfume")} selected={this.state.categorySel.perfume}>Parfums</Button>
                    <Button type="catBtn" catSel={() => this.catSelHandler("makeup")} selected={this.state.categorySel.makeup}>Make-Up</Button>
                    <Button type="catBtn" catSel={() => this.catSelHandler("hygiene")} selected={this.state.categorySel.hygiene}>Hygiène et Beauté</Button>
                </div>
                <ShopProds 
                view={this.state.View} 
                toggleView={this.toggleViewHandler}
                filterMenuToggle={this.filterMenuToggle} 
                sortMenuToggle={this.sortMenuToggle} 
                showFilters={this.state.showFilterMenu}
                showSorts={this.state.showSortMenu}
                products={currentProducts}
                totalProducts={this.state.products.length}
                productsPerPage={this.state.productsPerPage} 
                currentPage={this.state.currentPage}
                firstPage={this.toFirstPageHandler}
                backPage={this.toBackPageHandler}
                nextPage={this.toNextPageHandler}
                lastPage={this.toLastPageHandler} 
                brandSel={this.brandSelHandler}/>
                {/* <ShopCat/> */}
            </div>
        );
    }
}

export default ShopPage;