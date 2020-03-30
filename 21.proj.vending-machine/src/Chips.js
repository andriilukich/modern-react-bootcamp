import React, { Component } from 'react';
import Message from './Message';
import {Link} from 'react-router-dom';
import './Chips.css';

class Chips extends Component {
  render() {
    return(
      <div className="Chips">
        <h1>Chips</h1>
        <Message>
          <Link exact to='/'>Return</Link>
        </Message>
      </div>
    )
  }
}

export default Chips;
 