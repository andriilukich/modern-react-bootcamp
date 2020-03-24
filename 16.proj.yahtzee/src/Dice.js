import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die 
          val={d}
          idx={idx}
          key={idx} 
          locked={this.props.locked[idx]}
          handleClick={this.props.handleClick}
          disabled={this.props.disabled}
          rolling={this.props.rolling && !this.props.locked[idx]}
        />
      )}
    </div>
  }
}

export default Dice;