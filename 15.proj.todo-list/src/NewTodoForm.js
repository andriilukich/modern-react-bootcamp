import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = { ...this.state, id: uuidv4(), iscompleted: false };
    this.props.createTodo(newTodo);
    this.setState({ task: '' });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label className="NewTodoForm__inp-title" htmlFor="task">New Todo</label>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="New Todo"
          value={this.state.task}
          onChange={this.handleChange}
          className="NewTodoForm__inp"
        />
        <button className="NewTodoForm__btn">Add new todo</button>
      </form>
    );
  }
}

export default NewTodoForm;