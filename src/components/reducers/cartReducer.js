const initialState = {
    items: [],
    totalAmount: 0
}


const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    
    switch(type){
        case "ADD_ITEM_TO_CART":
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