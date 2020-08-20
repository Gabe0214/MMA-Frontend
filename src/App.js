import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/Home/Home';
import ShoppingCart from './components/ShoppingCartPage/ShoppingCart';
import NavBar from './components/NavBar/NavBar'
import { items } from './components/ShoppingCartPage/ShoppingCartDummyData'
import './App.scss'
function App() {
  const [cartData, setCartData] = useState(items)
  const [menu, setMenu ] = useState(false)

  return (
    <div>
      <NavBar cart={cartData} menu={menu} setMenu={setMenu}/>
      <Switch>
        <Route exact path='/' component={() => <HomePage/>}/>
        <Route path='/cart' component={ShoppingCart}/>
        </Switch>
    </div>
  );
}

export default App;
