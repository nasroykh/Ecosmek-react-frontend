import React, { Component, ChangeEvent } from 'react';
import classes from './App.module.css';
import Layout from '../../components/Layout/Layout';
import LandingPage from '../../components/LandingPage/LandingPage';
import SignInPage from '../../components/SignInPage/SignInPage';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LangChange from '../../components/LangChange/LangChange';
import SignUpPage from '../../components/SignUpPage/SignUpPage';
import ShopPage from '../../components/ShopPage/ShopPage';
import Toolbar from '../../components/Toolbar/Toolbar';
import axios from '../../axios-ck';
import Spinner from '../../elements/Spinner/Spinner';

class App extends Component {

	state = {
		showInfos : false,
		account : {
			fullName : '',
			email: '',
            password: ''
		},
		signedUp : false,
		signedIn : false
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
		})
		.catch(error => console.log(error));
		console.log(this.state.signedUp);
	}
	
	signInBtnHandler = () => {
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
		})
		.catch(error => console.log(error));
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
							<Layout sisu signUpIn={this.signInBtnHandler}>
								<SignInPage
									handleInput={this.handleInput} 
									email={this.state.account.email}
									password={this.state.account.password}
								/>
								{this.state.signedIn ? <Redirect to="/shop" /> : null}
							</Layout>
						</Route>
						<Route path="/signup" exact>
							<Layout sisu signUpIn={this.signUpBtnHandler}>
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
							{this.state.signedUp ? <Redirect to="/shop" /> : <LandingPage showInfos={this.state.showInfos} toggleInfos={this.toggleInfos} />}
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
