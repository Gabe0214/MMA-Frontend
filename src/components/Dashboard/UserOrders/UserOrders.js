import React from 'react';
import './orders.scss';
export const UserOrders = ({ orders }) => {
	return (
		<div className='orders-main-view'>
			<div className='orders-container'>
				{orders &&
					orders.map((order) => (
						<div className='order'>
							<h4>{order.name}</h4>
							<img src={`${order.image}`} alt='product-img' />
							<p>
								<span>Price</span>: ${order.price}
							</p>
							<p>
								{' '}
								<span>Quantity </span>: {order.qty}
							</p>
							<p>
								<span>Size</span>: {order.size}
							</p>
						</div>
					))}
			</div>
		</div>
	);
};
