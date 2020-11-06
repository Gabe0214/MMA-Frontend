const initialState = {
    items: [],
    totalAmount: 0
}


const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    
    switch(type){
        case "ADD_ITEM_TO_CART":
            console.log(payload)
            const duplicates = state.items.filter((product) => product.product_id == payload.product_id) // lines 14-18 verifies if items already exists within the cart. If, so update quantity only. No duplicates allowed
            if(duplicates.length > 0){
                const removeProduct = state.items.filter((product) => product.product_id !== payload.product_id)
                const updateProductQuantity = {...duplicates[0], quantity : duplicates[0].quantity + payload.quantity, size: [...duplicates[0].size, ...payload.size]}
                return{...state, items: [...removeProduct, updateProductQuantity]}
            }
            return {...state, items: [...state.items, payload]}
        case "CALCULATE_TOTAL":
            const addTotal = state.totalAmount + payload
            const finalNumber = Math.round(addTotal * 100) / 100
            return {...state, totalAmount: finalNumber}
        default:
            return state;
    }
    return state
}

export default cartReducer