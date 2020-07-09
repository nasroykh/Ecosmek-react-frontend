import React, { Component } from 'react';
import classes from './App.module.css';
import Layout from './components/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';

class App extends Component {
	render() {
		return (
			<div className={classes.App}>
				<Layout>
					<LandingPage />
				</Layout>
			</div>
		);
	}
}
export default App;
