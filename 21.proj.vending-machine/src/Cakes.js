import React, { Component } from 'react'
import Message from './Message';
import {Link} from 'react-router-dom';
import './Cakes.css';

class Cakes extends Component {
  render() {
    return(
      <div className="Cakes">
        <h1>Cakes</h1>
        <Message>
          <Link exact to='/'>Return</Link>
        </Message>
      </div>
    )
  }
}

export default Cakes;