import FilterButton from '../FilterButton';
import { List, ItemsLeft, Filters, ClearButton } from './styles';
import { IStateDispatch } from '../../interfaces';

const FooterArea = ({ state, dispatch }: IStateDispatch) => {
  const activeItems = (): string => {
    const numItems = state.todos.filter((item) => !item.completed).length;
    return (numItems === 1 ? '1 item' : `${numItems} items`) + ' left';
  };

  return (
    <footer>
      <List>
        <ItemsLeft as='li'>{activeItems()}</ItemsLeft>
        <Filters>
          <FilterButton
            text='All'
            dispatch={dispatch}
            currentFilter={state.visibilityFilter}
          />
          <FilterButton
            text='Active'
            dispatch={dispatch}
            currentFilter={state.visibilityFilter}
          />
          <FilterButton
            text='Completed'
            dispatch={dispatch}
            currentFilter={state.visibilityFilter}
          />
        </Filters>
        <li>
          <ClearButton
            as='button'
            onClick={() => {
              dispatch({ type: 'REMOVE_COMPLETED', payload: '' });
            }}
          >
            Clear Completed
          </ClearButton>
        </li>
      </List>
    </footer>
  );
};

export default FooterArea;
