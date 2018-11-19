import React, { Component } from 'react';
import './TodoItem.scss';

class TodoItem extends Component {

  render() {
    return (
      <li className="todo-item" data-id={ this.props.id }>
        <p className="todo-item__text">{ this.props.text }</p>
        <button className="todo-item__btn" onClick={ () => { this.props.removeTodo(this.props.id) } } >X</button>
      </li>
    )
  }
}

export default TodoItem;