import React, { Component } from 'react'
import './BtnList.css';

class BtnList extends Component {
  static defaultProps = {
    colors: ['black', 'yellow', 'red', 'green', 'pink'],
  };

  constructor(props) {
    super(props);
    this.state = {color: 'purple'};
  }

  changeColor(newColor) {
    this.setState({ color: newColor});
  }

  render() {
    return (
      <div className="BtnList" style={{backgroundColor: this.state.color}}>
        {this.props.colors.map(color => {
          const colorObj = { backgroundColor: color };
          return (
            //<button style={colorObj} onClick={this.changeColor.bind(this, color)}>
            <button style={colorObj} onClick={() => this.changeColor(color)}>
            Click on me 
            </button>
          );
        })}
      </div>
    );
  }
}

export default BtnList;