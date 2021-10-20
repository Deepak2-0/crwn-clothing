import React from "react";
import "./menu-item.scss";

import { useHistory } from "react-router-dom";

const MenuItem = (props) => {
	const { title, imageUrl, size, linkUrl } = props;

	const history = useHistory();
	return (
		<div
			className={`menu-item ${size}`}
			onClick={() => history.push(`/${linkUrl}`)}
		>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>

			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
