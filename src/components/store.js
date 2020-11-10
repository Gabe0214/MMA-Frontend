import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist';
import { composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'



const middleWare = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))




export const persistor = persistStore(store)


export default store