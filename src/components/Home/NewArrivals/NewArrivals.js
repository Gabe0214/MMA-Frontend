import React, { useEffect } from 'react';
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const loading = items.length === 0 ? <h3 style={{ textAlign: 'center', marginTop: '25px' }}>Loading...</h3> : null;

	return (
		<div className='arrival-main-view'>
			<h2 className='title'>New Arrivals</h2>
			{loading}
			<ArrivalProducts products={items} />
		</div>
	);
};

export default NewArrivals;
