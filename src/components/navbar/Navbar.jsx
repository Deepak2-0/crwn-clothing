import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { logoImage } from "../../assets/imageLinks";

const Navbar = () => {
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
			</div>
		</div>
	);
};

export default Navbar;