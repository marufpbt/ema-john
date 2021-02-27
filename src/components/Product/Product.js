import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
	console.log(props);
	const { img, name, seller, stock, price } = props.product;
	console.log(props.handleAddProuduct);
	return (
		<div className="product">
			<div className="product-image">
				<img src={img} alt="" />
			</div>
			<div className="product-name">
				<h3>{name}</h3>
				<p>by:<small>{" " + seller}</small></p>
				<p>${price}</p>
				<p>only{" " + stock + " "}left in stock - order soon</p>
				<button className="main-btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />{" "}add to cart</button>
			</div>
		</div>
	);
};

export default Product;
