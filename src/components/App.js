import React, { Component } from 'react';
import './App.scss';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AddTodo addTodo={ this.props.addTodo } />
        <TodoList todos={ this.props.todos } removeTodo={ this.props.removeTodo } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => dispatch({ type: 'REMOVE_TODO', payload: id }),
    addTodo: (todo) => dispatch({ type: 'ADD_TODO', payload: todo })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);