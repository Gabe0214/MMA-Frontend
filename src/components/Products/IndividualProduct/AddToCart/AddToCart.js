import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './AddToCart.scss';
export const CartSection = ({ product, size }) => {
	const [ quantity, setQuanitiy ] = useState(1);

	const dispatch = useDispatch();

	const addItem = (item, size) => {
		const { product_id, name, price } = item;
		const img = item.image;

		const product = { product_id, unique_id: uuidv4(), name, price: Number(price) * quantity, size, img, quantity };
		console.log(product);
		dispatch({
			type: 'ADD_ITEM_TO_CART',
			payload: product
		});
		dispatch({
			type: 'CALCULATE_TOTAL',
			payload: product.price
		});
		dispatch({
			type: 'SHOW_CART_NAV_MENU',
			payload: true
		});
	};

	return (
		<div className='cart-section-container'>
			<div className='quantity-container'>
				<button
					className={quantity == 1 ? 'btn disabled' : 'btn'}
					disabled={quantity == 1 ? 'disabled' : null}
					onClick={() => setQuanitiy((prevState) => prevState - 1)}
				>
					-
				</button>{' '}
				<input className='quantity-input' value={quantity} readOnly name='quantity' />{' '}
				<button onClick={() => setQuanitiy((prevState) => prevState + 1)} className='btn'>
					+
				</button>
			</div>
			<button className='add-to-cart' onClick={() => addItem(product, size)}>
				Add To Cart
			</button>
		</div>
	);
};
