import React, { Component } from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem';

class TodoList extends Component {

  render() {
    const todoItems = this.props.todos.map((todo) => {
      return <TodoItem key={ todo.id } id={ todo.id } text={ todo.text } removeTodo={ this.props.removeTodo } />;
    });

    return (
      <ul className="todo-list">
        { todoItems }
      </ul>
    )
  }
}

export default TodoList;