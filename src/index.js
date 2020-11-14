import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux' 
import { PersistGate } from 'redux-persist/integration/react'

import store from './components/store'
import { persistor } from './components/store'


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>  
   <Router forceRefresh={true}> 
     <PersistGate persistor={persistor}>
      <App />
     </PersistGate> 
    </Router>
  </Provider>   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

