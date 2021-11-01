import React, { Component } from "react";
import SHOP_DATA from "../../utils/SHOP_DATA";
import CollectionsPreview from "../../components/collectionsPreview/CollectionsPreview";

class Shop extends Component {
	constructor() {
		super();

		this.state = {
			collections: SHOP_DATA,
		};
	}
	render() {
		const { collections } = this.state;

		return (
			<div className="shop-page">
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionsPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}

export default Shop;
