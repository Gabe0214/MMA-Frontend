import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import cartReducer from './cartReducer'
import productsReducer from './productsReducer/productsReducer'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'productReducer']
}


const rootReducer = combineReducers({
    cart: cartReducer,
    productsReducer
})

export default persistReducer(persistConfig, rootReducer)