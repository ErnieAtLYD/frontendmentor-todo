import styled from 'styled-components';
import ListItem from './ListItem';
import ListItemWrapper from './ListItemWrapper';
import { IListItem, IStateDispatch } from '../interfaces';
import TodoContext from '../contexts/TodoContext';

const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;

  ${ListItemWrapper}:first-child {
    border-radius: 5px 5px 0 0;
  }
`;

const List = ({ state, dispatch }: IStateDispatch) => {
  const filteredItems = state.todos.filter((item: IListItem): boolean => {
    if (state.visibilityFilter === 'SHOW_ACTIVE') {
      return item.completed === false;
    } else if (state.visibilityFilter === 'SHOW_COMPLETED') {
      return item.completed === true;
    }
    return true;
  });

  return (
    <ListWrapper>
      <TodoContext state={state} dispatch={dispatch}>
        {filteredItems.map((item) => (
          <ListItem
            dispatch={dispatch}
            key={item.id}
            id={item.id}
            item={item}
          />
        ))}
      </TodoContext>
    </ListWrapper>
  );
};

export default List;
