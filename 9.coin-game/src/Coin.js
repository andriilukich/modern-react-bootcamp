import React, {Component} from 'react';
import './Coin.css'

class Coin extends Component {
  render() {
    return <img className="Coin" src={this.props.data.imgSrc} alt={this.props.data.side}/>
  }
}

export default Coin;