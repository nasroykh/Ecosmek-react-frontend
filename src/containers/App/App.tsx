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
import {getFromStorage, setInStorage} from '../../utils/storage';

class App extends Component {

	state = {
		showInfos : false,
		accountSignIn : {
			signInEmail: '',
            signInPassword: ''
		},
		accountSignUp : {
			signUpFullName : '',
			signUpEmail: '',
            signUpPassword: ''
		},
		token: '',
		isLoading: true,
		signedIn: false,
		signedUp: false,
		isAuth: false,
		sdShow: false,
		sbShow: false,
		bdShow:false
	}

	componentDidMount() {
/* 		const token = getFromStorage('the_main_app');
		axios.get("/get_accounts")
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		})
		if (token) {
			axios.get("/get_accounts")
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			})
		} else {
			this.setState({isLoading: false});
		} */
	}

	handleInputSU = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        let account = this.state.accountSignUp;
		let updatedAccount;
        switch (event.target.placeholder) {
            case 'Nom':
                account.signUpFullName = value;
                updatedAccount = account;
                this.setState({accountSignIn : updatedAccount});
                break;
        
            case 'Email':
                account.signUpEmail = value;
                updatedAccount = account;
                this.setState({accountSignIn : updatedAccount});
                break;

            case 'Mot de Passe':
                account.signUpPassword = value;
                updatedAccount = account;
                this.setState({accountSignIn : updatedAccount});
                break;
            default:
                break;
        }
	}
	
	handleInputSI = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        let account = this.state.accountSignIn;
		let updatedAccount;
        switch (event.target.placeholder) {        
            case 'Email':
                account.signInEmail = value;
                updatedAccount = account;
                this.setState({accountSignIn : updatedAccount});
                break;

            case 'Mot de Passe':
                account.signInPassword = value;
                updatedAccount = account;
                this.setState({accountSignIn : updatedAccount});
                break;
            default:
                break;
        }
    }
	
    signUpBtnHandler = () => {
		const {
			signUpFullName,
			signUpEmail,
			signUpPassword
		} = this.state.accountSignUp;

		const accountInfos = {
			fullName: signUpFullName,
			email: signUpEmail,
			password: signUpPassword
		}

		this.setState({isLoading: true});

		if (!accountInfos.fullName || !accountInfos.email || !accountInfos.password){
			console.log("empty infos");
		}	
		else {
			axios.post("/create_account", accountInfos)
			.then(res => {
				let signedUp = res.data.signedUp;
				this.setState({isLoading: false, signedUp: signedUp});
			})
			.catch(err => {
				console.log(err);
			})
		}
	}
	
	signInBtnHandler = () => {
		const {
			signInEmail,
			signInPassword,
		} = this.state.accountSignIn;

		const accountInfos = {
			identification: signInEmail,
			password: signInPassword
		}
		this.setState({isLoading: true});

		axios.post("/login", accountInfos)
		.then(res => {
			this.setState({isLoading: false});
		})
		.catch(err => {
			console.log(err);
		})
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
		const {
			isLoading,
			token,
			signedUp,
			signedIn
		} = this.state;

		const {
			signInEmail,
			signInPassword,
		} = this.state.accountSignIn;

		const {
			signUpFullName,
			signUpEmail,
			signUpPassword
		} = this.state.accountSignUp;

		return (
			<div className={classes.App}>
				<BrowserRouter>
					<Switch>

						<Route path="/home/:user" exact>
							<Layout 
							/* sisush */ 
							sdToggle={this.toggleSD} 
							sdShow={this.state.sdShow}
							sbShow={this.state.sbShow}
							sbToggle={this.toggleSB}
							hideBD={this.hideBD}
							bdShow={this.state.bdShow}>
								{this.state.isLoading ? <Spinner/> : <HomePage/>}
							</Layout>
						</Route>

						<Route path="/home" exact>
							<Layout 
							/* sisush */ 
							sdToggle={this.toggleSD} 
							sdShow={this.state.sdShow}
							sbShow={this.state.sbShow}
							sbToggle={this.toggleSB}
							hideBD={this.hideBD}
							bdShow={this.state.bdShow}>
								<HomePage/>
							</Layout>
						</Route>

						<Route path="/shop/:user" exact>
							<Layout 
							/* sisush */ 
							sdToggle={this.toggleSD} 
							sdShow={this.state.sdShow}
							sbShow={this.state.sbShow}
							sbToggle={this.toggleSB}
							hideBD={this.hideBD}
							bdShow={this.state.bdShow}>
								{this.state.isLoading ? <Spinner/> : <ShopPage/> }
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
								<ShopPage/>
							</Layout>
						</Route>

						<Route path="/signin" exact>
							<Layout 
							hideSB hideCI showBS 
							page='signin' 
							signUpIn={this.signInBtnHandler}
							sdToggle={this.toggleSD} 
							sdShow={this.state.sdShow}
							hideBD={this.hideBD}
							bdShow={this.state.bdShow}
							token={token}>
								<SignInPage handleInput={this.handleInputSI} email={signInEmail} password={signInPassword} sdToggle={this.toggleSD} sdShow={this.state.sdShow} hideBD={this.hideBD} bdShow={this.state.bdShow} />
							</Layout>
						</Route>

						<Route path="/signin/login" exact>
							<Layout 
							hideSB hideCI showBS 
							page='signin' 
							signUpIn={this.signInBtnHandler}
							sdToggle={this.toggleSD} 
							sdShow={this.state.sdShow}
							hideBD={this.hideBD}
							bdShow={this.state.bdShow}
							token={token}>
								<SignInPage handleInput={this.handleInputSI} email={signInEmail} password={signInPassword} sdToggle={this.toggleSD} sdShow={this.state.sdShow} hideBD={this.hideBD} bdShow={this.state.bdShow} />
							</Layout>
						</Route>

						<Route path="/signup" exact>
							<Layout 
							hideSB hideCI showBS 							
							page='signup' 
							signUpIn={this.signUpBtnHandler}
							sdToggle={this.toggleSD} 
							sdShow={this.state.sdShow}
							hideBD={this.hideBD}
							bdShow={this.state.bdShow}>
								<SignUpPage 
									handleInput={this.handleInputSU} 
									fullname={signUpFullName}
									email={signUpEmail}
									password={signUpPassword}
								/>
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