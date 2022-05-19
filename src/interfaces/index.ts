import {Dispatch} from 'react';

export interface IListItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface StateProps {
  todos: IListItem[];
  visibilityFilter: string;
}

export interface ActionProps {
  type: string;
  // most likely will be a string, but can be an array if type is SET_TODOS
  payload: string | IListItem[];
}

export interface IStateDispatch {
  state: StateProps;
  dispatch: Dispatch<ActionProps>;
}

export const initialState = {
  todos: [] as IListItem[],
  visibilityFilter: 'SHOW_ALL',
};
