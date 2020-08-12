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
  const [isClosed, setClosed] = useState(true)
  return (
    <div className="App">
      <NavBar cart={cartData} menu={menu} setMenu={setMenu} isClosed={isClosed} setClosed={setClosed}/>
      <Switch>
        <Route exact path='/' component={() => <HomePage cart ={cartData} setCart ={setCartData}/>}/>
        <Route path='/cart' component={ShoppingCart}/>
        </Switch>
    </div>
  );
}

export default App;
