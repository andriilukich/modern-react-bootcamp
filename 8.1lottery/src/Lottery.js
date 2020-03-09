import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  generate() {
    this.setState(curState => ({
      nums: curState.nums.map(
        item => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }
  onBtnClick() {
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <h2>{this.props.title}</h2>
        <div>
          {
            this.state.nums.map(item => (
              <Ball num={item} />
            ))
          }
        </div>
        <button className="Lottery__btn" onClick={this.onBtnClick}>Generate</button>
      </section>
    )
  }
}

export default Lottery;