import React, { Component } from 'react';
import classes from './App.module.css';
import Layout from '../../components/Layout/Layout';
import LandingPage from '../../components/LandingPage/LandingPage';
import SignInPage from '../../components/SignInPage/SignInPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LangChange from '../../components/LangChange/LangChange';
import SignUpPage from '../../components/SignUpPage/SignUpPage';
import ShopPage from '../../components/ShopPage/ShopPage';
import Toolbar from '../../components/Toolbar/Toolbar';
import axios from '../../axios-ck';
import Spinner from '../../elements/Spinner/Spinner';

class App extends Component {

	state = {
        showInfos : false
	}
	
    toggleInfos = () => {
        this.setState({showInfos : !this.state.showInfos})
    }

	render() {
		return (
			<div className={classes.App}>
				<BrowserRouter>
					<Switch>
						<Route path="/shop" exact>
							<Layout>
								{/* <Spinner/> */}
								<ShopPage/>
							</Layout>
						</Route>
						<Route path="/signin" exact>
							<Layout sisu>
								<SignInPage/>
							</Layout>
						</Route>
						<Route path="/signup" exact>
							<Layout sisu>
								<SignUpPage/>
							</Layout>					
						</Route>
						<Route path="/">
							<LandingPage showInfos={this.state.showInfos} toggleInfos={this.toggleInfos} />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
