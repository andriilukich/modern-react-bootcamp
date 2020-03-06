import React, { Component } from 'react';

class Game2 extends Component {
  // The second way to declare a variable state
  state = {
    score: 99
  };
  
  render () {
    return (
      <div>
        <h2>Your score is: {this.state.score}</h2>
      </div>
    );
  }
}

export default Game2;