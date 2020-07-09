import React, { Component } from 'react';
import classes from './App.module.css';
import Layout from '../../components/Layout/Layout';
import LandingPage from '../../components/LandingPage/LandingPage';

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
				<Layout>
					<LandingPage showInfos={this.state.showInfos} toggleInfos={this.toggleInfos} />
				</Layout>
			</div>
		);
	}
}
export default App;
