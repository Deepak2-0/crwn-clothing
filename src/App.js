import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Auth from "./pages/auth/Auth";

function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/auth" component={Auth} />
			</Switch>
		</div>
	);
}

export default App;
