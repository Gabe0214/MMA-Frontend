const initialState = {
    products: [],
    filteredProducts: [],
    loading: false,
    error: false
}

const productsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch(type){
        case "LOAD_PRODUCTS":
            return {...state, loading: true}
        case "GET_ALL_PRODUCTS_SUCCESS":
            return {...state, loading: false, error:false}
        case "GET_ALL_PRODUCTS_FAILURE":
            return {...state, loading: false, error: true}

        default:
            return state
    }

    return state
}

export default productsReducer