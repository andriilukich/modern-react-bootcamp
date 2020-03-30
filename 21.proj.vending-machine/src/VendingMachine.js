import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';
import './VendingMachine.css';

class VendingMachine extends Component {
  render() {
    return(
      <div className="VendingMachine">
        <h1>Home</h1>
        <Message>
          <Link exact to='/chips'>Chips</Link>
          <Link exact to='/cakes'>Cakes</Link>
          <Link exact to='/muffins'>Muffins</Link>
        </Message>
      </div>
    ) 
  }
}

export default VendingMachine;