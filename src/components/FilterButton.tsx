import styled from 'styled-components';
import {FooterText} from './atoms/typography';
import {ActionProps} from '../interfaces';

interface FilterButtonProps {
  dispatch: React.Dispatch<ActionProps>;
  text: string;
  currentFilter: string;
}

export const ButtonStyle = styled(FooterText)`
  background: none;
  border: 0;
  color: var(--placeholder-color);
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0;
  margin: 0 0.5625rem;

  &:disabled,
  &[disabled] {
    color: var(--footer-active-color);
  }

  &:hover {
    text-decoration: underline;
    color: var(--list-item-color);
  }
`;

const FilterButton = ({dispatch, text, currentFilter}: FilterButtonProps) => {
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
