import React from 'react';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Cakes from './Cakes';
import Muffins from './Muffins';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/cakes" render={() => <Cakes />} />
        <Route exact path="/muffins" render={() => <Muffins />} />
      </Switch>
    </div>
  );
}

export default App;
