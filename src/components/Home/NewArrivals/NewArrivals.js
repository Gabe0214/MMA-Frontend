import React, { useState, useEffect } from 'react';
import { ArrivalProducts } from './NewArrivalsProducts';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../reducers/productsReducer/productsActions';
import './NewArrivals.scss';
const NewArrivals = () => {
	const productsReducer = useSelector((state) => state.productsReducer);
	const dispatch = useDispatch();
	const items = productsReducer.products.slice(0, 7);
	useEffect(() => {
		dispatch(fetchAllProducts());
	}, []);

	return (
		<div className='arrival-main-view'>
			<h2 className='title'>New Arrivals</h2>
			<ArrivalProducts products={items} />
		</div>
	);
};

export default NewArrivals;
