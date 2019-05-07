import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoItem.scss';
import * as actionTypes from '../actions/actionTypes';

class TodoItem extends Component {
  render() {
    return (
      <li className="todo-item" data-id={this.props.id}>
        <p className="todo-item__text">{this.props.text}</p>
        <button
          className="todo-item__btn"
          onClick={() => {
            this.props.removeTodo(this.props.id);
          }}
        >
          X
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => dispatch({ type: actionTypes.REMOVE_TODO, payload: id })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
