import {useContext} from 'react';
import {ButtonStyle} from './styles';
import {TodoAppContext} from '../../contexts/TodoAppContext';

interface FilterButtonProps {
  text: string;
  currentFilter: string;
}

const FilterButton = ({text, currentFilter}: FilterButtonProps) => {
  const {dispatch} = useContext(TodoAppContext);
  // FIXME: use enums
  const FILTER: Record<string, string> = {
    All: 'SHOW_ALL',
    Active: 'SHOW_ACTIVE',
    Completed: 'SHOW_COMPLETED',
  };

  return (
    <ButtonStyle
      as="button"
      disabled={FILTER[text] === currentFilter}
      onClick={() =>
        dispatch({type: 'SET_VISIBILITY_FILTER', payload: FILTER[text]})
      }
    >
      {text}
    </ButtonStyle>
  );
};

export default FilterButton;
