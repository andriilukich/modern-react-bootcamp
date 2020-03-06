import React, { Component } from 'react';

class Demo extends Component {
  constructor(props) {
    super();
    console.log(this.props);
  }
  render () {
    return <h2> {this.props.animal} </h2>
  }
}

export default Demo;