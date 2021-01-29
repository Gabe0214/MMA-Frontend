import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cartReducer';
import productsReducer from './productsReducer/productsReducer';
import userReducer from './userReducer/userReducer';
const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'cart', 'productReducer', 'customer' ]
};

const rootReducer = combineReducers({
	cart: cartReducer,
	productsReducer,
	customer: userReducer
});

export default persistReducer(persistConfig, rootReducer);
