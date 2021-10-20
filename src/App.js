import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Hats from "./pages/hats/Hats";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/hats" component={Hats} />
			</Switch>
		</div>
	);
}

export default App;
