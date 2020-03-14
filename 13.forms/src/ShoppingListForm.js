import React, { Component } from 'react';

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', qty: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: '', qty: '' });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={this.handleChange}
        />
        <label htmlFor="qty">Quantity: </label>
        <input
          type="text"
          id="qty"
          name="qty"
          onChange={this.handleChange}
        />

        <button>Add Item</button>
      </form>
    );
  }
}

export default ShoppingListForm;