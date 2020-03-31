import React from 'react';
import Picture from './Picture';
import Animal from './Animal';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route 
        exact
        path='/picture/:name'
        render={(routerProps) => <Picture {...routerProps} />}
      />
      <Route 
        path='/picture/:pictureName/animal/:animalName'
        component={Animal} 
      />
    </div>
  );
}

export default App;
