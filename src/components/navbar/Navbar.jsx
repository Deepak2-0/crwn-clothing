import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { logoImage } from "../../assets/imageLinks";
import { auth } from "../../firebase/utils";

const Navbar = ({ currentUser }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<img src={logoImage} alt="logo" className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/auth">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
