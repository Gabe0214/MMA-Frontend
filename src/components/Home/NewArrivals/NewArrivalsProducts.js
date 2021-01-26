import React from 'react';
import { NavLink } from 'react-router-dom';
import './NewArrivals.scss';
export const ArrivalProducts = ({ products }) => {
	return (
		<div className='product-arrival-section'>
			<div className='arrival-product-container'>
				{products.map((item, i) => (
					<div className='arrival-product' key={i}>
						<NavLink to={`/products/product/${item.product_id}`}>
							<img className='product-image' src={item.image} />
							<h3>{item.name}</h3>
						</NavLink>
						<span className='product-price'>${item.price}</span>
					</div>
				))}
			</div>
		</div>
	);
};
