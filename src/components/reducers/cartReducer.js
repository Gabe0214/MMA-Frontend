const initialState = {
    items: [],
    totalAmount: 0
}


const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    
    switch(type){
        case "ADD_ITEM_TO_CART":
            return {...state, items: [...state.items, {product: payload.item}]}
        default:
            return state;
    }
    return state
}

export default cartReducer