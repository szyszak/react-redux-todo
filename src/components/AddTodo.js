import React, { Component } from 'react';
import './AddTodo.scss';

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addTodo(this.state.input);

    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <form className="add-todo" onSubmit={ this.handleSubmit } >
        <label className="add-todo__label">Add new todo:
        </label>
        <br />
        <input className="add-todo__input" value={ this.state.input } onChange={ this.handleChange } />
        <button className="add-todo__btn">ADD</button>
      </form>
    );
  }
}

export default AddTodo;