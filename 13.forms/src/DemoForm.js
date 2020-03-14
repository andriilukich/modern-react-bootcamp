import React, { Component } from 'react';

class DemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt){
    evt.preventDefault();
    alert(`You tipe in: ${this.state.username}`);
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <h1>Demo Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Name</label>
          <input 
            id="username"
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <label htmlFor="user-id">Email</label>
          <input 
            id="user-id"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label htmlFor="user-password">Password</label>
          <input 
            id="user-password"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default DemoForm;