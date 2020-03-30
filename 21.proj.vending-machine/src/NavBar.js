import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return(
      <nav className="NavBar">
        <NavLink exact activeClassName="NavBar__link-active" to='/'>Home</NavLink>
        <NavLink exact activeClassName="NavBar__link-active" to='/chips'>Chips</NavLink>
        <NavLink exact activeClassName="NavBar__link-active" to='/cakes'>Cakes</NavLink>
        <NavLink exact activeClassName="NavBar__link-active" to='/muffins'>Muffins</NavLink>
      </nav>
    )
  }
}

export default NavBar;