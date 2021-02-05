import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FilterModal } from './FilterModal/FilterModal';
import './Filter.scss';
export const Filter = ({ filterBrand, brands }) => {
	// const [ brands, setBrands ] = useState([]);
	const [ modal, setModal ] = useState(false);
	// useEffect(() => {
	// 	const CancelToken = axios.CancelToken;
	// 	const source = CancelToken.source();
	// 	const getBrands = async () => {
	// 		try {
	// 			const response = await axios.get('https://mma-server.herokuapp.com/products');
	// 			const items = response.data.map((products) => products.brand.toLowerCase());
	// 			const removeDup = [ ...new Set(items), 'All' ];
	// 			setBrands(removeDup.sort());
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};

	// 	getBrands();
	// 	return () => {
	// 		source.cancel();
	// 	};
	// }, []);

	return (
		<React.Fragment>
			<button
				onClick={() => setModal((prevState) => !prevState)}
				className={modal ? 'filter-btn is--toggled' : 'filter-btn'}
			>
				<span>Filter</span> <div className='icon-filters' />
			</button>
			<FilterModal brands={brands} setModal={setModal} modal={modal} filter={filterBrand} />
		</React.Fragment>
	);
};
