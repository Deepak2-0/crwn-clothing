import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Auth from "./pages/auth/Auth";
import { auth } from "./firebase/utils";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	//for avoid any memory leaks.
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user?.multiFactor?.user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Navbar currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/auth" component={Auth} />
				</Switch>
			</div>
		);
	}
}

export default App;
