import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavCart } from './NavShoppingCart';
import { MobileMenu } from './Menu/MoibileMenu';
import './Navbar.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavShoppingCartMenu } from './NavShoppingCartMenu.js/NavShoppingCartMenu';
const NavBar = () => {
	const [ menu, setMenu ] = useState(false);
	let history = useHistory();
	const shoppingCart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const test = (e) => {
		setMenu(!menu);
		window.scroll(0, 0);
		console.log('hello');
	};

	return (
		<React.Fragment>
			<nav id='nav-bar'>
				<FontAwesomeIcon icon={faBars} size='lg' onClick={test} />
				<img src='/alliance-logo.png' className='logo' onClick={() => history.push('/')} />
				<div className='user-cart-container'>
					<FontAwesomeIcon
						icon={faUserCircle}
						size='lg'
						className={'user-icon'}
						onClick={(e) => history.push('/users/dashboard')}
					/>
					<NavCart dispatch={dispatch} shoppingCart={shoppingCart} />
				</div>
			</nav>
			<MobileMenu menu={menu} setMenu={setMenu} />
			<NavShoppingCartMenu />
		</React.Fragment>
	);
};

export default NavBar;
