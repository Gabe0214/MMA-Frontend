const initialState = {
    items: [],
    totalAmount: 0
}


const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    
    switch(type){
        case "ADD_ITEM_TO_CART":
            console.log(payload)
            const duplicates = state.items.filter((product) => {
                if(product.id == payload.id && product.size == payload.size){
                    return product
                }
            }) // lines 14-18 verifies if items already exists within the cart. If, so update quantity only. No duplicates allowed
            // console.log(duplicates)
            if(duplicates.length > 0){
                // console.log(duplicates)
                const updateProductQuantity = {...duplicates[0], quantity : duplicates[0].quantity + payload.quantity}
                const removeProduct = state.items.filter((product) => {
                    if(product.id == payload.id && product.size == payload.size){
                       return product.id !== payload.id
                    
                    }
                    return product
                })
                console.log(removeProduct)
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