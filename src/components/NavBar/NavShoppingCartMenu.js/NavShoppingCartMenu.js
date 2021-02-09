import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import './NavShoppingCartMenu.scss';

export const NavShoppingCartMenu = () => {
	const shoppingCart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const history = useHistory();
	const removeFromCart = (id, price, qty) => {
		const totalItemAmount = price * qty;
		dispatch({
			type: 'REMOVE_ITEM',
			payload: { id }
		});

		deductPrice(totalItemAmount);
	};

	const deductPrice = (deductPrice) => {
		dispatch({
			type: 'DEDUCT_TOTAL',
			payload: { total: deductPrice }
		});
	};
	// console.log(shoppingCart.items);

	return (
		<div className={shoppingCart.showNavMenu ? 'menu-cart-container menu menu--active' : 'menu-cart-container'}>
			<h4 style={{ textAlign: 'center', fontSize: '12px', padding: '15px 0' }}>
				Shopping Cart ({shoppingCart.items.length})
			</h4>
			{shoppingCart.items.map((product) => (
				<div className='item-container' key={product.unique_id}>
					<div className='image-container'>
						<img src={product.img} alt='proudt-image' />
					</div>
					<div className='item-info'>
						<h4>
							{product.name} - {product.size}
						</h4>
						<span>${product.price}</span>
					</div>
					<div className='remove' onClick={() => removeFromCart(product.unique_id, product.price, product.quantity)}>
						<span>x</span>
					</div>
				</div>
			))}
			<div className='go-to-cart-container'>
				<div className='sub-total-container'>
					<span>Subtotal:</span>
					<span className='money'>$ {shoppingCart.totalAmount} USD</span>
				</div>
				<div className='go-to-cart-btn'>
					<button onClick={() => history.push('/cart')}>
						<FontAwesomeIcon icon={faLock} /> Go to cart
					</button>
				</div>
			</div>
		</div>
	);
};
