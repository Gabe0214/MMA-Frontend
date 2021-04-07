import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { DesktopFiltering } from '../Filter.js/DesktopFiltering/DesktopFiltering';
function AllProducts() {
	const [ sortOption, setSortOption ] = useState('');
	const [ brands, setBrands ] = useState([]);
	const productReducer = useSelector((state) => state.productsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		const getBrands = async () => {
			try {
				const response = await axios.get('https://mma-server.herokuapp.com/products');
				const items = response.data.map((products) => products.brand.toLowerCase());
				const removeDup = [ ...new Set(items), 'All' ];
				setBrands(removeDup.sort());
			} catch (err) {
				console.log(err);
			}
		};
		getBrands();
		dispatch(fetchAllProducts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(
		() => {
			sortP('');
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ sortOption ]
	);

	function sortP() {
		if (sortOption === 'A-Z') {
			dispatch(sortProductsByDesc());
		} else if (sortOption === 'Z-A') {
			dispatch(sortProductsByAsc());
		} else if (sortOption === 'High-Low') {
			dispatch(sortProductsPriceHighLow());
		} else if (sortOption === 'Low-High') {
			dispatch(sortProductsPriceLowHigh());
		} else if (sortOption === '') {
			return;
		}
	}

	const filter = (filterBy) => {
		dispatch(filterProducts(filterBy));
	};

	if (productReducer.loading) {
		return (
			<React.Fragment>
				<h1>Loading Data.....</h1>
			</React.Fragment>
		);
	}

	return (
		<div className='product-main-container'>
			<h2 style={{ textAlign: 'center' }} className='title'>
				All Products
			</h2>
			<div className='sort-filter-container'>
				<SortBy sortIt={sortP} setOptions={setSortOption} option={sortOption} />
				<Filter filterBrand={filter} brands={brands} />
			</div>
			<div className='products-desktop-filter-container'>
				<DesktopFiltering filter={filter} brands={brands} />
				<ProductsView products={productReducer.products} />
			</div>
		</div>
	);
}

export default AllProducts;
