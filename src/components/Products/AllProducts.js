import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../reducers/productsReducer/productsActions';
import { ProductsView } from './ProductsView';
import { SortBy } from '../Sort.js/SortBy';
import { Filter } from '../Filter.js/Filter';
import {
	sortProductsByDesc,
	sortProductsByAsc,
	sortProductsPriceLowHigh,
	sortProductsPriceHighLow,
	filterProducts
} from '../reducers/productsReducer/productsActions';
import './ProductsView.scss';
function AllProducts() {
	const [ sortOption, setSortOption ] = useState('');
	const productReducer = useSelector((state) => state.productsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, []);

	useEffect(
		() => {
			sortP('');
		},
		[ sortOption ]
	);

	function sortP() {
		if (sortOption == 'A-Z') {
			dispatch(sortProductsByDesc());
		} else if (sortOption == 'Z-A') {
			dispatch(sortProductsByAsc());
		} else if (sortOption == 'High-Low') {
			dispatch(sortProductsPriceHighLow());
		} else if (sortOption == 'Low-High') {
			dispatch(sortProductsPriceLowHigh());
		} else if (sortOption == '') {
			return;
		}
	}

	function filter(filterBy) {
		dispatch(filterProducts(filterBy));
	}

	if (productReducer.loading) {
		return (
			<React.Fragment>
				<h1>Loading Data.....</h1>
			</React.Fragment>
		);
	}

	console.log(productReducer.products);

	return (
		<div>
			<h2 style={{ textAlign: 'center' }} className='title'>
				All Products
			</h2>
			<div className='sort-filter-container'>
				<SortBy sortIt={sortP} setOptions={setSortOption} option={sortOption} />
				<Filter filterBrand={filter} />
			</div>
			<ProductsView products={productReducer.products} />
		</div>
	);
}

export default AllProducts;
