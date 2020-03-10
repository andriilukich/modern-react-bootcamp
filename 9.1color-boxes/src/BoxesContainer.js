import React, { Component } from 'react';
import './BoxesContainer.css';
import Box from './Box';

class BoxesContainer extends Component {
  static defaultProps = {
    nBox: 18,
    allColors: ['red', 'pink', 'black', 'yellow', 'gray', 'purple'],
  }

  render() {
    const boxes = Array.from({ length: this.props.nBox }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return (
      <div className="BoxesContainer">
        {boxes}
      </div>
    )
  }
}

export default BoxesContainer;