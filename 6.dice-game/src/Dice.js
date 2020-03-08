import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
  render () {
    return <i className={
        `fas fa-dice-${
          this.props.face
        } dice ${
          this.props.rolling && 'dice-rolling'
        }`
      }></i>;
  }
}

export default Dice;