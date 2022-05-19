import {useContext} from 'react';
import List from '../List';
import {ListSectionWrapper, MobileListSectionWrapper} from './styles';
import FooterArea from '../FooterArea';
import FilterButton from '../FilterButton/FilterButton';
import {TodoAppContext} from '../../contexts/TodoAppContext';

const ListSection = () => {
  const {state} = useContext(TodoAppContext);
  const {visibilityFilter} = state;

  return (
    <>
      <ListSectionWrapper>
        <List />
        <FooterArea />
      </ListSectionWrapper>
      <MobileListSectionWrapper>
        <FilterButton currentFilter={visibilityFilter} text="All" />
        <FilterButton currentFilter={visibilityFilter} text="Active" />
        <FilterButton currentFilter={visibilityFilter} text="Completed" />
      </MobileListSectionWrapper>
    </>
  );
};

export default ListSection;
