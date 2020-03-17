import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  create(newTodo) {
    this.setState({
      list: [...this.state.list, newTodo]
    });
  }

  remove(id) {
    this.setState({
      list: this.state.list.filter(todo => todo.id !== id)
    });
  }

  update(id, updateTask) {
    const updateTodo = this.state.list.map(item => {
      if (item.id === id) {
        return { ...item, task: updateTask };
      }

      return item;
    });
    this.setState({ list: updateTodo });
  }

  toggle(id) {
    const updateTodo = this.state.list.map(item => {
      if (item.id === id) {
        return { ...item, iscompleted: !item.iscompleted };
      }

      return item;
    });
    this.setState({ list: updateTodo });
  }

  render() {
    const todos = this.state.list.map(todo => {
      return <Todo
        key={todo.id}
        id={todo.id}
        value={todo.task}
        completed={todo.iscompleted}
        removeTodo={this.remove}
        updateTodo={this.update}
        toggleTodo={this.toggle}
      />
    });

    return (
      <div className="TodoList">
        <h1 className="TodoList__title">Todo List!</h1>
        <h2 className="TodoList__sub-title">A Simple React Todo List App.</h2>
        <ul className="TodoList__list">{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;