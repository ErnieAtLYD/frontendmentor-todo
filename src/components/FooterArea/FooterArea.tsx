import FilterButton from '../FilterButton';
import {List, ItemsLeft, Filters, ClearButton} from './styles';
import {useContext} from 'react';
import {TodoAppContext} from '../../contexts/TodoAppContext';

const FooterArea = () => {
  const {state, dispatch} = useContext(TodoAppContext);
  const {visibilityFilter, todos} = state;

  const activeItems = (): string => {
    const numItems = todos.filter(item => !item.completed).length;
    return (numItems === 1 ? '1 item' : `${numItems} items`) + ' left';
  };

  return (
    <footer>
      <List>
        <ItemsLeft as="li">{activeItems()}</ItemsLeft>
        <Filters>
          <FilterButton text="All" currentFilter={visibilityFilter} />
          <FilterButton text="Active" currentFilter={visibilityFilter} />
          <FilterButton text="Completed" currentFilter={visibilityFilter} />
        </Filters>
        <li>
          <ClearButton
            as="button"
            onClick={() => {
              dispatch({type: 'REMOVE_COMPLETED', payload: ''});
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
