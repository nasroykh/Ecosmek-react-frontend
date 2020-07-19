import React, { Component, ChangeEvent } from 'react';
import classes from './App.module.css';
import Layout from '../../components/Layout/Layout';
import LandingPage from '../../components/LandingPage/LandingPage';
import SignInPage from '../../components/SignInPage/SignInPage';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LangChange from '../../components/LangChange/LangChange';
import SignUpPage from '../../components/SignUpPage/SignUpPage';
import ShopPage from '../ShopPage/ShopPage';
import axios from '../../axios-ck';
import Spinner from '../../elements/Spinner/Spinner';
import HomePage from '../../components/HomePage/HomePage';

class App extends Component {

	state = {
		showInfos : false,
		account : {
			fullName : '',
			email: '',
            password: ''
		},
		signedUp : false,
		signedIn : false,
		pageLoaded: true,
		sdShow: false,
		sbShow: false,
		bdShow:false
	}

	handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        let account = this.state.account;
        let updatedAccount;
        switch (event.target.placeholder) {
            case 'Nom':
                account.fullName = value;
                updatedAccount = account;
                this.setState({account : updatedAccount});
                break;
        
            case 'Email':
                account.email = value;
                updatedAccount = account;
                this.setState({account : updatedAccount});
                break;

            case 'Mot de Passe':
                account.password = value;
                updatedAccount = account;
                this.setState({account : updatedAccount});
                break;
            default:
                break;
        }
    }
	
    signUpBtnHandler = () => {
		this.setState({pageLoaded: false});
		let accountInfos = {
			fullName : this.state.account.fullName,
			email : this.state.account.email,
			password : this.state.account.password
		}
		axios.post('create_account', accountInfos)
		.then(res => {
			if (res.data.signedUp) {
				this.setState({signedUp: true})
			}
			else if (!res.data.signedUp) {
				this.setState({signedUp: false})
			}
			this.setState({pageLoaded: true});
		})
		.catch(error => console.log(error));
		console.log(this.state.signedUp);
	}
	
	signInBtnHandler = () => {
		this.setState({pageLoaded: false});
		let accountInfos = {
			identification : this.state.account.email,
			password : this.state.account.password
		}
		axios.post('login', accountInfos)
		.then(res => {
			if (res.data.signedIn) {
				this.setState({signedIn: true})
			}
			else if (!res.data.signedUp) {
				this.setState({signedIn: false})
			}		
			this.setState({pageLoaded: true});
		})
		.catch(error => console.log(error));
    }

    toggleInfos = () => {
        this.setState({showInfos : !this.state.showInfos})
	}
	
	toggleSD = () => {
		let sdState = this.state.sdShow;
		let bdState = this.state.bdShow;
		this.setState({sdShow: !sdState, bdShow: !bdState});
	}

	toggleSB = () => {
		let sbState = this.state.sbShow;
		let bdState = this.state.bdShow;
		this.setState({sbShow: !sbState, bdShow: !bdState});
	}

	hideBD = () => {
		this.setState({bdShow: false, sdShow: false, sbShow: false});
	}

	render() {
		return (
			<div className={classes.App}>
				<BrowserRouter>
					<Switch>
						<Route path="/home" exact>
							<Layout 
							/* sisush */ 
							sdToggle={this.toggleSD} 
							sdShow={this.state.sdShow}
							sbShow={this.state.sbShow}
							sbToggle={this.toggleSB}
							hideBD={this.hideBD}
							bdShow={this.state.bdShow}>
								{this.state.pageLoaded ? <HomePage/> : <Spinner/>}
							</Layout>
						</Route>
						<Route path="/shop" exact>
							<Layout 
							/* sisush */ 
							sdToggle={this.toggleSD} 
							sdShow={this.state.sdShow}
							sbShow={this.state.sbShow}
							sbToggle={this.toggleSB}
							hideBD={this.hideBD}
							bdShow={this.state.bdShow}>
								{this.state.pageLoaded ? <ShopPage/> : <Spinner/>}
							</Layout>
						</Route>
						<Route path="/signin" exact>
							<Layout 
							hideSB hideCI showBS backNextBtn 
							signUpIn={this.signInBtnHandler}
							sdToggle={this.toggleSD} 
							sdShow={this.state.sdShow}
							hideBD={this.hideBD}
							bdShow={this.state.bdShow}>
								<SignInPage
									handleInput={this.handleInput} 
									email={this.state.account.email}
									password={this.state.account.password}
									sdToggle={this.toggleSD} 
									sdShow={this.state.sdShow}
									hideBD={this.hideBD}
									bdShow={this.state.bdShow}
								/>
								{this.state.signedIn ? <Redirect to="/shop" /> : null}
							</Layout>
						</Route>
						<Route path="/signup" exact>
							<Layout 
							hideSB hideCI showBS backNextBtn 
							signUpIn={this.signUpBtnHandler}
							sdToggle={this.toggleSD} 
							sdShow={this.state.sdShow}
							hideBD={this.hideBD}
							bdShow={this.state.bdShow}>
								<SignUpPage 
									handleInput={this.handleInput} 
									fullName={this.state.account.fullName}
									email={this.state.account.email}
									password={this.state.account.password}
								/>
								{this.state.signedUp ? <Redirect to="/shop" /> : null }
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