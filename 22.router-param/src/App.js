import React from 'react';
import Picture from './Picture';
import Animal from './Animal';
import PictureSearch from './PictureSearch';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          exact
          path='/picture/:name'
          render={(routerProps) => <Picture {...routerProps} />}
        />
        <Route 
          exact
          path='/picture/:pictureName/animal/:animalName'
          component={Animal} 
        />
        <Route exact path='/' render={() => <PictureSearch/>} />
        <Route render={() => <h1>ERROR NOT FOUND!</h1>} />
      </Switch>
    </div>
  );
}

export default App;
