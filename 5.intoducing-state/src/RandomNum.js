import React, { Component } from 'react';

class RandomNum extends Component {
  constructor(props) {
    super(props);
    this.state = {num: 1};
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    let rand = Math.floor(Math.random() * this.props.maxNum) + 1 ;
    return this.setState({num: rand});
  }

  render() {
    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {this.state.num !== 7 ?
          <button onClick={this.onButtonClick}>Random Number</button> :
          <h2>You win</h2>}
        {/* {this.state.num === 7 && <h2>You Win!</h2>}
        {this.state.num !== 7 && <button onClick={this.onButtonClick}>Random Number</button>} */}
      </div>
    );
  }
}

export default RandomNum;