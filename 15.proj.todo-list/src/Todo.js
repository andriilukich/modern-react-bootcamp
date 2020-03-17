import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.value, isEdit: false };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleToggleLi = this.handleToggleLi.bind(this);
  }

  handleRemove(id) {
    this.props.removeTodo(this.props.id);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEdit: false });
  }

  handleToggleForm(evt) {
    this.setState({ isEdit: !this.state.isEdit });
  }

  handleToggleLi(evt) {
    this.props.toggleTodo(this.props.id);
    this.setState({ isCompleted: true }); 
  }

  render() {
    let result;

    if (this.state.isEdit) {
      result = (
        <div className="Todo">
          <form className="Todo__form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
              className="Todo__input"
            />
            <button className="Todo__btn-submit">Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={this.props.completed ? "Todo__item Todo__item-completed" : "Todo__item"}
            onClick={this.handleToggleLi}
          >
            {this.props.value}
          </li>
          <div className="Todo__buttons">
            <button className="Todo__btn" onClick={this.handleToggleForm}>
              <i className="fas fa-pen"></i>
            </button>
            <button className="Todo__btn" onClick={this.handleRemove}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default Todo;