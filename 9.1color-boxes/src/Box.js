import React, { Component } from 'react';
import { choice } from './helpers';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.colors) };
    this.onBoxClick = this.onBoxClick.bind(this);
  }

  changeСolor() {
    let newColor;

    do {
      newColor = choice(this.props.colors);
    } while (this.state.color === newColor);

    this.setState({ color: newColor });
  }

  onBoxClick() {
    this.changeСolor();
  }

  render() {
    return (
      <div className='Box' onClick={this.onBoxClick} style={{ backgroundColor: this.state.color }}>
      </div>
    )
  }
}

export default Box;