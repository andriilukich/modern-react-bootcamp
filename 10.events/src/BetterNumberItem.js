import React, { Component } from 'react'

class BetterNumberItem extends Component {
  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(evt) {
    this.props.remove(this.props.value);
  }

  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.props.remove}>X</button>
      </li>
    );
  }
}
export default BetterNumberItem;