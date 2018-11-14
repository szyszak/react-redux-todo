import React, { Component } from 'react';
import './TodoItem.scss';

class TodoItem extends Component {

  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  }

  render() {
    return (
      <li className="todo-item" id={ this.props.id }>
        <p className="todo-item__text">{ this.props.text }</p>
        <button className="todo-item__btn" onClick={ this.handleRemove } >X</button>
      </li>
    )
  }
}

export default TodoItem;