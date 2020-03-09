import React from 'react';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Daily lottery' NumBalls={4} maxNum={100} />
    </div>
  );
}

export default App;
