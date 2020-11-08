import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/Home/Home';
import ShoppingCart from './components/ShoppingCartPage/ShoppingCart';
import NavBar from './components/NavBar/NavBar';
import './App.scss'
import { FooterContainer } from './components/Footer/FooterContainer';
import IndividualProduct from './components/Products/IndividualProduct/IndividualProduct';
import AllProducts from './components/Products/AllProducts';
function App() {


  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={() => <HomePage/>}/>
        <Route path='/cart' component={ShoppingCart}/>c
        <Route path='/products/product/:id' component={IndividualProduct}/> 
        <Route path='/products/all' component={AllProducts}/> 
        </Switch>
        <FooterContainer/>
    </div>
  );
}

export default App;
