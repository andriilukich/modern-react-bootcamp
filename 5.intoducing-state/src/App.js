import React from 'react';
import Game from './Game';
import Game2 from './Game2';
import Demo from './Demo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game />
      <Game2 />
      <Demo animal = 'Bobcat' food = 'Pineapple' />
    </div>
  );
}

export default App;
