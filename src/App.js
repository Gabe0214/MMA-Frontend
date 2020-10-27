import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/Home/Home';
import ShoppingCart from './components/ShoppingCartPage/ShoppingCart';
import NavBar from './components/NavBar/NavBar'
import { items } from './components/ShoppingCartPage/ShoppingCartDummyData'
import './App.scss'
import { FooterContainer } from './components/Footer/FooterContainer';
import IndividualProduct from './components/Products/IndividualProduct/IndividualProduct';
function App() {
  const [cartData, setCartData] = useState(items)
  // const [menu, setMenu ] = useState(false)

  return (
    <div>
      <NavBar cart={cartData}/>
      <Switch>
        <Route exact path='/' component={() => <HomePage cart={cartData} setCart={setCartData}/>}/>
        <Route path='/cart' component={ShoppingCart}/>
        <Route path='/products/product/:id' component={IndividualProduct}/> 
        </Switch>
        <FooterContainer/>
    </div>
  );
}

export default App;
