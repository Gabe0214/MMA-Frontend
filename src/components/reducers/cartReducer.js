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
                if(product.product_id == payload.product_id && product.size == payload.size){
                    return product
                }
            }) 
            console.log(duplicates)
            if(duplicates.length > 0){    // if duplicate exist with same size, modify the quantity. No duplicates with the same size should be repeated in cart. 
                // OK -> cart:[{shirt: 'blue' size: 'M', quantity: 2}, {shirt: 'blue', size: 'L', quantity: 1}]
                //  NOT OK -> cart: [{shirt: 'blue' size: 'M', quantity: 2}, {shirt: 'blue', size: 'L', quantity: 1}, {shirt: 'blue', size: 'L', quantity: 3}]
                const removeProduct = state.items.filter((product) => {
                    if(product.product_id == payload.product_id && product.size == payload.size){
                       return product.product_id !== payload.product_id
                    
                    }
                    return product
                })
                const updateProductQuantity = {...duplicates[0], quantity : duplicates[0].quantity + payload.quantity}
                return{...state, items: [...removeProduct, updateProductQuantity]}
            }
            return {...state, items: [...state.items, payload]}
        
        case "REMOVE_ITEM":
            const removeProduct = state.items.filter((product) => product.unique_id !== payload.id)
            return {...state, items: [...removeProduct]}

    
        case "CALCULATE_TOTAL":
            const addTotal = state.totalAmount + payload
            const finalNumber = Math.round(addTotal * 100) / 100
            return {...state, totalAmount: finalNumber}
        
        case "DEDUCT_TOTAL": 
            const subTotal = state.totalAmount - payload.total 
            const subFinalNumber = Math.round(subTotal* 100) / 100
            return {...state, totalAmount: subFinalNumber}
        
        default:
            return state;
    }
    return state
}

export default cartReducer