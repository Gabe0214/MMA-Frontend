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
        const products = await axios.get('http://localhost:8000/products')
        dispatch(getProducts(products))
    }

    catch(err) {
        console.log(err)
        errorProducts(err)
    }
}