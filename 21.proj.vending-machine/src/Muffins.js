import React, { Component } from 'react';
import Message from './Message';
import {Link} from 'react-router-dom';
import './Muffins.css';

class Muffins extends Component {
  render() {
    return(
      <div className="Muffins">
        <h1>Muffins</h1>
        <Message>
          <Link exact to='/'>Return</Link>
        </Message>
      </div>
    )
  }
}

export default Muffins;