import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class BoxListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '', height: '', color: '' };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handlerSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.createNewBox(newBox);
    this.setState({
      width: '',
      height: '',
      color: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <div>
          <label htmlFor='width'>Width:  </label>
          <input
            type='text'
            id='width'
            name='width'
            value={this.state.width}
            onChange={this.handlerChange}
          />
        </div>
        <div>
          <label htmlFor='height'>Height:  </label>
          <input
            type='text'
            id='height'
            name='height'
            value={this.state.height}
            onChange={this.handlerChange}
          />
        </div>
        <div>
          <label htmlFor='color'>Color:   </label>
          <input
            type='text'
            id='color'
            name='color'
            value={this.state.color}
            onChange={this.handlerChange}
          />
        </div>
        <button>Create new Box</button>
      </form>
    )
  }
}

export default BoxListForm;