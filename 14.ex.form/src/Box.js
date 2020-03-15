import React, { Component } from 'react';

class Box extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handlerClick = this.handlerClick.bind(this);
  // }

  // handlerClick() {
  //   this.props.removeBox(this.props.id);
  // }

  render() {
    return(
      <div>
        <div style={{
          width:`${this.props.width}em`,
          height:`${this.props.height}em`,
          backgroundColor: this.props.color
        }}>
        </div>
        <button onClick={this.props.removeBox}>Remove the box.</button>
        {/* <button onClick={this.handlerClick}>Remove the box.</button> */}
      </div>
    );
  }
}

export default Box;
