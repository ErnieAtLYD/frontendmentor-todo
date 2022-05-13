import styled from 'styled-components';
import List from './List';
import FooterArea from './FooterArea';
import FilterButton from './FilterButton';
import {IStateDispatch} from '../interfaces';

const ListSectionWrapper = styled.article`
  box-shadow: var(--list-shadow);
  border-radius: 5px;
`;

const MobileListSectionWrapper = styled(ListSectionWrapper)`
  background-color: var(--list-item-bg-color);
  font-size: 0.875rem;
  margin-top: 1rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 23.5rem) {
    display: none;
  }
`;

const ListSection = ({state, dispatch}: IStateDispatch) => {
  return (
    <>
      <ListSectionWrapper>
        <List state={state} dispatch={dispatch} />
        <FooterArea state={state} dispatch={dispatch} />
      </ListSectionWrapper>
      <MobileListSectionWrapper>
        <FilterButton
          dispatch={dispatch}
          currentFilter={state.visibilityFilter}
          text="All"
        />
        <FilterButton
          dispatch={dispatch}
          currentFilter={state.visibilityFilter}
          text="Active"
        />
        <FilterButton
          dispatch={dispatch}
          currentFilter={state.visibilityFilter}
          text="Completed"
        />
      </MobileListSectionWrapper>
    </>
  );
};

export default ListSection;
