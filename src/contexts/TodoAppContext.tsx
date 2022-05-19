import {createContext, Dispatch} from 'react';
import {ActionProps, initialState, StateProps} from '../interfaces';

export const TodoAppContext = createContext<{
  state: StateProps;
  dispatch: Dispatch<ActionProps>;
}>({
  state: initialState,
  dispatch: () => undefined,
});
