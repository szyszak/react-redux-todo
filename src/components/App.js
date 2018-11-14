import React, { Component } from 'react';
import './App.scss';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          text: 'sleep',
          id: Math.floor(new Date().getTime() * Math.random())
        },
        {
          text: 'eat',
          id: Math.floor(new Date().getTime() * Math.random())
        },
        {
          text: 'fuck',
          id: Math.floor(new Date().getTime() * Math.random())
        },
        {
          text: 'vidya',
          id: Math.floor(new Date().getTime() * Math.random())
        },
        {
          text: 'beer',
          id: Math.floor(new Date().getTime() * Math.random())
        },
        {
          text: 'code',
          id: Math.floor(new Date().getTime() * Math.random())
        },
      ]
    }
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, { text: todo, id: Math.floor(new Date().getTime() * Math.random()) }]
    })
  }

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <AddTodo addTodo={ this.addTodo } />
        <TodoList todos={ this.state.todos } removeTodo={ this.removeTodo } />
      </div>
    );
  }
}

export default App;
