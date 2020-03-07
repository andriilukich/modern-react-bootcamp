import React, { Component } from 'react';

class BrockenClick2 extends Component {
  state = {clicked: false};

  handleClick = (e) => {
    this.setState({clicked: true});
  }

  render () {
    return (
      <div>
        <h2>{this.state.clicked ? 'Clicked!!' : 'Not clicked'}</h2>
        <button onClick = {this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default BrockenClick2;