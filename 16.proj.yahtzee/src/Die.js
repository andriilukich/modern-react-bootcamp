import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numWord: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 6,
  };

  constructor(props) {
    super(props);
    this.handleToggleDice = this.handleToggleDice.bind(this);
  }

  handleToggleDice() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const {numWord, val, locked, disabled, rolling} = this.props;
    let classes = `Die fas fa-dice-${numWord[val - 1]} fa-5x `;
    if (locked) classes += 'Die-locked ';
    if (rolling) classes += 'Die-rolling';
    return (
      <i className={classes} onClick={this.handleToggleDice} disabled={disabled} />
    );
  }
}

export default Die;
