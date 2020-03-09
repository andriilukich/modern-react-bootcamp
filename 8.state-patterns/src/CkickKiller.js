import React, { Component } from 'react';

class CkickKiller extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.onBtnClick = this.onBtnClick.bind(this);
    this.onBtnTripleClick = this.onBtnTripleClick.bind(this);
  }

  onBtnClick() {
    this.setState(this.incrementScore);
  }

  // onBtnTripleClick() {
  //   this.setState({ num: this.state.num + 1});
  //   this.setState({ num: this.state.num + 1});
  //   this.setState({ num: this.state.num + 1});
  // }

  incrementScore(curState) {
    return { num: curState.num + 1 };
  }

  onBtnTripleClick() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }

  render() {
    return (
      <div>
        <h1>Number of clicks: {this.state.num}</h1>
        <button onClick={this.onBtnClick}>Click me</button>
        <button onClick={this.onBtnTripleClick}>Click me three times</button>
      </div>
    )
  }
}

export default CkickKiller;