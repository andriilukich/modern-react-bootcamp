import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    alert('You are LOgged in');
    this.props.history.push('/picture/girls');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.props.history.goBack}>Go Back</button>
        <button onClick={this.props.history.goForward}>Go Forward</button>
      </div>
    )
  }
}

export default withRouter(NavBar);