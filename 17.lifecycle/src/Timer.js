import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    console.log('Inside Constructor');
  }

  componentDidMount() {
    console.log('Inside Mount');
    this.timerId = setInterval( () => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    console.log('Inside Render');
    return (
      <h2>{this.state.time.getSeconds()}</h2>
    )
  }
}

export default Timer;
