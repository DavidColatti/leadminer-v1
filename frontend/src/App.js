import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NotFound from './components/404/NotFound.js';
import NavBar from './components/navbar/NavBar';
import LandingPage from './components/landingpage/LandingPage.js';

import actions from './services/index';

class App extends Component {
	state = {};

	async componentDidMount() {
		let user = await actions.isLoggedIn();

		this.setState({ ...user.data });
	}

	setUser = (user) => {
		console.log(user);
		this.setState({
			...user.data
		});
	};

	render() {
		return (
			<BrowserRouter>
				<NavBar setUser={this.setUser} email={this.state.email} />
				<Switch>
					<Route exact path="/" render={(props) => <LandingPage {...props} />} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}
export default App;
