import { useState } from 'react';
import styled from 'styled-components';
import List from './List';
import FooterArea from './FooterArea';
import FilterButton from './FilterButton';
import { IListItem } from '../interfaces';

interface ListSectionProps {
  items: IListItem[];
  setItems: React.Dispatch<React.SetStateAction<IListItem[]>>;
  toggleCheckbox: (id: string) => void;
  deleteItem: (id: string) => void;
  removeCompleted: () => void;
}

const ListSectionWrapper = styled.article`
  box-shadow: var(--list-shadow);
  border-radius: 5px;
`;

const MobileListSectionWrapper = styled(ListSectionWrapper)`
  background-color: var(--list-item-bg-color);
  font-size: 14px;
  margin-top: 1rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 23.5rem) {
    display: none;
  }
`;

const ListSection = ({
  items,
  setItems,
  toggleCheckbox,
  deleteItem,
  removeCompleted,
}: ListSectionProps) => {
  const [filter, setFilter] = useState('all');
  return (
    <>
      <ListSectionWrapper>
        <List
          filter={filter}
          items={items}
          setItems={setItems}
          toggleCheckbox={toggleCheckbox}
          deleteItem={deleteItem}
        />
        <FooterArea
          items={items}
          removeCompleted={removeCompleted}
          filterHooks={[filter, setFilter]}
        />
      </ListSectionWrapper>
      <MobileListSectionWrapper>
        <FilterButton text='All' filterHooks={[filter, setFilter]} />
        <FilterButton text='Active' filterHooks={[filter, setFilter]} />
        <FilterButton text='Completed' filterHooks={[filter, setFilter]} />
      </MobileListSectionWrapper>
    </>
  );
};

export default ListSection;
