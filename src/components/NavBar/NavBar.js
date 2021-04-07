import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavCart } from './NavShoppingCart';
import { MobileMenu } from './Menu/MoibileMenu';
import './Navbar.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavShoppingCartMenu } from './NavShoppingCartMenu.js/NavShoppingCartMenu';
import { DesktopLinks } from './DesktopLinks/DesktopLinks';
import { DesktopSubMenu } from './DesktopSubMenu/DesktopSubMenu';
const NavBar = () => {
	const [ menu, setMenu ] = useState(false);
	let history = useHistory();
	const [ desktopMenus, setDesktopMenus ] = useState({ men: false, women: false, kids: false, mma: false });
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
				<FontAwesomeIcon icon={faBars} size='lg' onClick={test} className='burger-menu' />
				<img src='/alliance-logo.png' className='logo' alt='logo' onClick={() => history.push('/')} />
				<DesktopLinks
					setOpenDesktopMenu={setMenu}
					openDesktopMenu={menu}
					setOptions={setDesktopMenus}
					options={desktopMenus}
				/>
				<div className='user-cart-container'>
					<FontAwesomeIcon
						icon={faUserCircle}
						size='lg'
						className={'user-icon'}
						onClick={(e) => history.push('/user/dashboard')}
					/>
					<NavCart dispatch={dispatch} shoppingCart={shoppingCart} />
				</div>
			</nav>
			<DesktopSubMenu
				menu={menu}
				mens={desktopMenus.men}
				kid={desktopMenus.kids}
				setMenu={setMenu}
				womens={desktopMenus.women}
				setOptions={setDesktopMenus}
				mma={desktopMenus.mma}
			/>
			<MobileMenu menu={menu} setMenu={setMenu} />
			<NavShoppingCartMenu />
		</React.Fragment>
	);
};

export default NavBar;
