import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './ProductsView.scss';
export const ProductsView = ({ products }) => {
	return (
		<div className='products-container'>
			{products &&
				products.map((item) => (
					<div className='product-container' key={item.name}>
						<div className='image-container'>
							<img src={item.image} alt='loading....' className='image' />
						</div>
						<NavLink className='name' to={`/products/product/${item.product_id}`}>
							{item.name.toUpperCase()}
						</NavLink>
						<span className='item-price'>${item.price}</span>
					</div>
				))}
		</div>
	);
};
