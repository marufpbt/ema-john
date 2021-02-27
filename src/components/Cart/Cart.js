import React from 'react';

const Cart = (props) => {
	const cart = props.cart;
	const total = cart.reduce((total, prd) => total + prd.price, 0);
	const tax = (total / 10).toFixed(2);
	let shipping = 0;
	if (total >= 100) {
		shipping = 80;
	}
	else{
		shipping = 0;
	}

	return (
		<div>
			<h2 style={{textAlign:"center"}}>Order Summary</h2>
			<h3 style={{ textAlign: 'center' }}> Items ordered: {cart.length}</h3>
			<h4>Shipping and Handing:{shipping}</h4>
			<h4>Total before tax:{shipping}</h4>
			<h4>Estimated tax:{tax}</h4>
			<h2 style={{ color: '#b12704' }}>Order Total: {total}</h2>
			<button>Review your order</button>
		</div>
	);
};

export default Cart;
