import React, { Component } from 'react';

class DemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({value: evt.target.value});
  }

  handleSubmit(evt){
    evt.preventDefault();
    alert(`You tipe in: ${this.state.value}`);
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <h1>Demo Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default DemoForm;