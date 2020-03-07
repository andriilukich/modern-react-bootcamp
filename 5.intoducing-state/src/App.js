import React from 'react';
import Game from './Game';
import Game2 from './Game2';
import Demo from './Demo';
import Rando from './Rando';
import Butoon from './Button';
import BrockenClick from './BrockenClick';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game />
      <Game2 />
      <Demo animal = 'Bobcat' food = 'Pineapple' />
      <Rando maxNum = {7}/>
      <Butoon />
      <BrockenClick />
    </div>
  );
}

export default App;
