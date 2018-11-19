import React, { Component } from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem';

class TodoList extends Component {

  render() {
    const todoItems = this.props.todos.map((todo) => {
      return <TodoItem key={ todo.id } id={ todo.id } text={ todo.text } removeTodo={ this.props.removeTodo } />;
    });

    return (
      <>
        { todoItems.length ? (
          <ul className="todo-list">
            { todoItems }
          </ul>
         ) : (
          <h2>NO TODOS</h2> 
          )
        }
      </>
    )
  }
}

export default TodoList;