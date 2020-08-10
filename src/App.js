import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={HomePage}/>
        </Switch>
    </div>
  );
}

export default App;
