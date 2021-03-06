import React, { Component } from "react";
import FormInput from "../formInput/FormInput";
import "./signIn.scss";
import CustomButton from "../customButton/CustomButton";
import { signInWithGoogle } from "../../firebase/utils";

export class SignIn extends Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
		};
	}
	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: "", password: "" });
	};
	render() {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign In with email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit"> Sign in </CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
