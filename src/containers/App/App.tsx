import React, { Component } from 'react';
import classes from './App.module.css';
import Layout from '../../components/Layout/Layout';
import LandingPage from '../../components/LandingPage/LandingPage';
import SignInPage from '../../components/SignInPage/SignInPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUpPage from '../../components/SignUpPage/SignUpPage';

class App extends Component {

	state = {
        showInfos : false
    }

    toggleInfos = () => {
        this.setState({showInfos : !this.state.showInfos})
    }

	render() {
		return (
			<BrowserRouter>
				<div className={classes.App}>
					<Layout>
						<Switch>
							<Route path="/signin" exact>
								<SignInPage/>
							</Route>
							<Route path="/signup" exact>
								<SignUpPage/>
							</Route>
							<Route path="/">
								<LandingPage showInfos={this.state.showInfos} toggleInfos={this.toggleInfos} />
							</Route>
						</Switch>
					</Layout>
				</div>
			</BrowserRouter>
		);
	}
}
export default App;
