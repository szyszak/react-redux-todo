import React, { Component } from 'react';
import './App.scss';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="main-header">TODO list:</h1>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
