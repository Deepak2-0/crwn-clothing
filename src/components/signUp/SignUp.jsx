import React, { Component } from "react";

export class SignUp extends Component {
	constructor() {
		super();

		this.state = {
			name: "",
			password: "",
		};
	}
	render() {
		return (
			<div>
				<div>SignUp</div>
			</div>
		);
	}
}

export default SignUp;
