const initialState = {
	products: [],
	filteredProducts: [],
	loading: false,
	error: false,
	routed: false
};

const productsReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'LOAD_PRODUCTS':
			return { ...state, loading: true };
		case 'GET_ALL_PRODUCTS_SUCCESS':
			return { ...state, products: payload, filteredProducts: payload, loading: false, error: false };
		case 'GET_ALL_PRODUCTS_FAILURE':
			return { ...state, loading: false, error: true };

		case 'SORT_BY_A-Z':
			const productsState = state.products;
			const sorted = productsState.sort((a, b) => (a.name > b.name ? 1 : -1)).map((items) => items);
			return { ...state, products: sorted };

		case 'SORT_BY_Z-A':
			const productsCurrState = state.products;
			const sortedAsc = productsCurrState.sort((a, b) => (a.name > b.name ? -1 : 1)).map((items) => items);
			return { ...state, products: sortedAsc };

		case 'SORT_BY_PRICE_LOW_HIGH':
			const productsStateAgain = state.products;
			const sortedPriceLowHigh = productsStateAgain
				.sort((a, b) => (parseInt(a.price) > parseInt(b.price) ? 1 : -1))
				.map((items) => items);
			return { ...state, products: sortedPriceLowHigh };

		case 'SORT_BY_PRICE_HIGH_LOW':
			const productsStateAgainTwo = state.products;
			const sortedPriceHighLow = productsStateAgainTwo
				.sort((a, b) => (parseInt(a.price) > parseInt(b.price) ? -1 : 1))
				.map((items) => items);
			return { ...state, products: sortedPriceHighLow };

		case 'FILTER_PRODUCTS':
			const result = state.filteredProducts.filter((items) => {
				if (items.brand.toLowerCase().includes(payload.option.toLowerCase())) {
					return items;
				} else if (payload.option === 'All') {
					return items;
				}
				return null;
			});
			return { ...state, products: result };
		case 'ROUTED':
			return { ...state, routed: !state.routed };

		default:
			return state;
	}
};

export default productsReducer;
