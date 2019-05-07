import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoList.scss';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const todoItems = this.props.todos.map(todo => {
      return <TodoItem key={todo.id} id={todo.id} text={todo.text} />;
    });

    return (
      <>
        {todoItems.length ? (
          <ul className="todo-list">{todoItems}</ul>
        ) : (
          <h2>NO TODOS</h2>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
