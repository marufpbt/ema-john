import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
	return (
		<div>
			<div className="header">
				<img src={logo}></img>
			</div>
			<nav>
				<a href="/shop">Shop</a>
				<a href="/review">Review</a>
				<a href="/inventory">Manage Inventory here</a>
			</nav>
		</div>
	);
};

export default Header;
