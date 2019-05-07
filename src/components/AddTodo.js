import React, { Component } from 'react';
import './AddTodo.scss';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionTypes';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.input.trim().length === 0) {
      alert(`can't add empty task!`);
    } else {
      this.props.addTodo(this.state.input);

      this.setState({
        input: ''
      });
    }
  };

  render() {
    return (
      <form className="add-todo" onSubmit={this.handleSubmit}>
        <label for="todo" className="add-todo__label">
          Add new todo:
        </label>
        <br />
        <input
          name="todo"
          id="todo"
          className="add-todo__input"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button className="add-todo__btn">ADD</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch({ type: actionTypes.ADD_TODO, payload: todo })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
