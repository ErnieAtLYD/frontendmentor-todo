import {v4 as uuid} from 'uuid';
import {StateProps, ActionProps, IListItem} from '../interfaces/';

// https://www.telerik.com/kendo-react-ui/react-hooks-guide/

export const initialState = {
  todos: [] as IListItem[],
  visibilityFilter: 'SHOW_ALL',
};

export const todoReducer = (
  state: StateProps,
  action: ActionProps
): StateProps => {
  switch (action.type) {
    case 'ADD_TODO':
      if (typeof action.payload !== 'string') {
        throw new Error('Payload must be a string');
      }
      return {
        ...state,
        todos: [
          ...state.todos,
          {text: action.payload, id: uuid(), completed: false},
        ],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {...todo, completed: !todo.completed}
            : todo
        ),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case 'REMOVE_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
    case 'SET_VISIBILITY_FILTER':
      if (typeof action.payload !== 'string') {
        throw new Error('Payload must be a string');
      }
      return {
        ...state,
        visibilityFilter: action.payload,
      };
    case 'SET_TODOS':
      if (typeof action.payload === 'string') {
        throw new Error('Todos must be an array of at least one item');
      }
      return {
        ...state,
        todos: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
