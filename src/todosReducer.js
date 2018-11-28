const generateId = () => {
  return Math.floor(new Date().getTime() * Math.random());
}

const initialState = {
  todos: [
    {
      text: 'sleep',
      id: 1
    },
    {
      text: 'eat',
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

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat({
          text: action.payload,
          id: generateId()
        })
      }

    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }

    default:
      return state;
  }
}

export default todosReducer;