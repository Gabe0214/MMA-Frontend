import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/Home/Home';
import ShoppingCart from './components/ShoppingCartPage/ShoppingCart';
import NavBar from './components/NavBar/NavBar'
import './App.scss'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/cart' component={ShoppingCart}/>
        </Switch>
    </div>
  );
}

export default App;
