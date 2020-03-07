import React from 'react';
import Game from './Game';
import Game2 from './Game2';
import Demo from './Demo';
import Rando from './Rando';
import Butoon from './Button';
import BrockenClick from './BrockenClick';
import BrockenClick2 from './BrockenClick2';
import RandomNum from './RandomNum';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Game />
      <Game2 />
      <Demo animal = 'Bobcat' food = 'Pineapple' />
      <Rando maxNum = {7}/>
      <Butoon />
      <BrockenClick />
      <BrockenClick2 /> */}
      <RandomNum maxNum = {10}/>
    </div>
  );
}

export default App;
