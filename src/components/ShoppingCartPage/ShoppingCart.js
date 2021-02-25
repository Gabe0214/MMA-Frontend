import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { api } from '../utils/axiosWithAuth';
import './ShoppingCart.scss';
import { PaymentModal } from './PaymentModal';
const ShoppingCart = () => {
	const [ payment, setPayment ] = useState(false);
	const [ pendingPayment, setPendingPayment ] = useState(false);
	const shoppingCart = useSelector((state) => state.cart);
	const customer = useSelector((state) => state.customer);

	const dispatch = useDispatch();
	const history = useHistory();

	const removeItem = (id, price, qty) => {
		dispatch({
			type: 'REMOVE_ITEM',
			payload: { id }
		});

		deductPrice(price);
	};

	const deductPrice = (deductTotal) => {
		dispatch({
			type: 'DEDUCT_TOTAL',
			payload: { total: deductTotal }
		});
	};
	const closeCartNavMenu = () => {
		dispatch({ type: 'CLOSE_CART_NAV_MENU', payload: false });
	};

	const checkout = async () => {
		if (!localStorage.getItem('token')) {
			return history.push('/signin');
		}

		setPendingPayment(true);

		const orderData = { order_user_id: Number(customer.user.user_id), total: parseInt(shoppingCart.totalAmount) };

		try {
			const res = await api().post('/orders/order', orderData);
			console.log(res);
			const { order_id } = res.data;
			shoppingCart.items.map(async (item) => {
				try {
					await api().post('/orders/order/order_detail', {
						order_details_order_id: order_id,
						order_details_product_id: item.product_id,
						qty: item.quantity,
						size: item.size,
						price: item.price
					});
				} catch (err) {
					console.log(err);
				}
			});
			setPayment(true);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(
		() => {
			if (payment) {
				setTimeout(() => {
					setPayment(false);
					setPendingPayment(false);
				}, 5000);
			}
		},
		[ payment ]
	);

	return (
		<section onClick={closeCartNavMenu} className='shopping-cart-main-view'>
			<h1 className='shopping-cart-title'>Shopping Cart</h1>
			{shoppingCart.items.length == 0 ? (
				<div className='no-items-container'>
					<h2 className='no-items'>There are not items in your cart</h2>
					<Link to='products/all'>Shop Here</Link>
				</div>
			) : (
				<React.Fragment>
					<div className='items-container'>
						{shoppingCart.items.map((product, i) => (
							<div className='item-container' key={i}>
								<div className='image-container'>
									<img src={product.img} />
								</div>
								<div className='item-info'>
									<h4>{product.name}</h4>
									<p className='size'>Size: {product.size}</p>
									<p className='price'>${product.price}</p>
								</div>
								<div className='remove' onClick={() => removeItem(product.unique_id, product.price, product.quantity)}>
									<p>x</p>
								</div>
							</div>
						))}
					</div>
					<div className='sub-total'>
						<p>Subtotal:</p>
						<div className='sub-total-amount-container'>
							<p className='total'>$ {shoppingCart.totalAmount}</p>
							<p>USD</p>
						</div>
					</div>
					<div className='checkout-btn'>
						<button onClick={checkout}>
							{' '}
							<FontAwesomeIcon className='lock' icon={faLock} /> {pendingPayment ? 'Loading...' : 'Checkout'}
						</button>
					</div>
				</React.Fragment>
			)}
			{payment ? <PaymentModal /> : null}
		</section>
	);
};

export default ShoppingCart;
