import * as actionTypes from '../actions/actionTypes';

const generateId = () => {
  return Math.floor(new Date().getTime() * Math.random());
};

const initialState = {
  todos: [
    {
      text: 'sleep',
      id: generateId()
    },
    {
      text: 'eat',
      id: generateId()
    },
    {
      text: 'vidya',
      id: generateId()
    },
    {
      text: 'beer',
      id: generateId()
    },
    {
      text: 'code',
      id: generateId()
    }
  ]
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          text: action.payload,
          id: generateId()
        })
      };

    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    default:
      return state;
  }
};

export default todosReducer;
