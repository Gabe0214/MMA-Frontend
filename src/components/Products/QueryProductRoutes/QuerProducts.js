import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './QueryProducts.scss';
import { ProductsView } from '../ProductsView';
const QuerProducts = ({ location }) => {
	const [ qryProducts, setQryProducts ] = useState([]);
	const [ isFetching, setisFecting ] = useState(true);
	const arry = location.search.split('&');
	const reString = arry[0].replace('?product_for=', '');
	const reStringTwo = arry[1].replace('type=', '');

	const dispatch = useDispatch();
	const qry = location.search;
	// console.log(qry);

	useEffect(
		() => {
			const getQueryItems = async () => {
				try {
					const res = await axios.get(`https://mma-server.herokuapp.com/products${qry}`);
					setQryProducts(res.data);
					setisFecting(false);
				} catch (err) {
					console.log(err);
				}
			};

			getQueryItems();
		},
		[ qry ]
	);

	if (isFetching) {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Loading...</h1>
			</div>
		);
	} else if (qryProducts.length == 0) {
		return (
			<div className='no-qry-container'>
				<h1>No Items Found</h1>
				<NavLink to='/products/all'>Shop Here</NavLink>
			</div>
		);
	}

	// console.log(qryProducts);
	return (
		<section className='qry-container'>
			<h1>
				{reString !== 'unisex' ? `${reString.toUpperCase()}'S ${reStringTwo.toUpperCase()}` : reStringTwo.toUpperCase()}
			</h1>
			<div className='underline' />
			{isFetching ? <p>Loading...</p> : <ProductsView products={qryProducts} />}
		</section>
	);
};

export default QuerProducts;
