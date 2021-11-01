import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/signUp/SignUp";

const Auth = () => {
	return (
		<div className="auth">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default Auth;
