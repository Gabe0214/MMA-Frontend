import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FilterModal } from './FilterModal/FilterModal';
import './Filter.scss';
export const Filter = ({ filterBrand }) => {
	const [ brands, setBrands ] = useState([]);
	const [ modal, setModal ] = useState(false);
	useEffect(() => {
		const getBrands = async () => {
			try {
				const response = await axios.get('https://mma-server.herokuapp.com/products');
				const items = response.data.map((products) => products.brand.toLowerCase());
				const removeDup = [ ...new Set(items) ];
				setBrands(removeDup.sort());
			} catch (err) {
				console.log(err);
			}
		};

		getBrands();
	}, []);

	return (
		<React.Fragment>
			<button
				onClick={() => setModal((prevState) => !prevState)}
				className={modal ? 'filter-btn is--toggled' : 'filter-btn'}
			>
				<span>Filter</span> <div className='icon-filters' />
			</button>
			{/* { modal ?<ul>
                {brands.map((brand, i) => {
                    return <li key={i}>{brand.toUpperCase()}</li>
                }) */}

			{/* </ul>: null } */}
			<FilterModal modal={modal} setModal={setModal} brands={brands} filter={filterBrand} />
		</React.Fragment>
	);
};
