import axios from 'axios'

export const loadProducts = (products) => ({
    type: "LOAD_PRODUCTS",
    payload: products
})

export const getProducts = (products) => ({
    type: "GET_ALL_PRODUCTS_SUCCESS",
    payload: products
})

export const errorProducts = () => ({
    type: "FETCHING_ERROR"
})


export const fetchAllProducts = () => async ( dispatch ) => {
    dispatch(loadProducts())
    try {
        const res = await axios.get('http://localhost:8000/products')
        const products = res.data
        dispatch(getProducts(products))
    }

    catch(err) {
        console.log(err)
        errorProducts(err)
    }
}

export const sortProductsByDesc = () => ({
    type: "SORT_BY_A-Z"
})

export const sortProductsByAsc = () => ({
    type: "SORT_BY_Z-A"
})

export const sortProductsPriceLowHigh = () => ({
    type: "SORT_BY_PRICE_LOW_HIGH"
})

export const sortProductsPriceHighLow = () => ({
    type: "SORT_BY_PRICE_HIGH_LOW"
})

export const filterProducts = (filterOption) => ({
    type: "FILTER_PRODUCTS",
    payload: {option : filterOption}
})