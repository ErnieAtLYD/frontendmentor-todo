import { useState } from 'react';
import List from './List';
import FooterArea from './FooterArea';
import { IListItem } from '../interfaces';
import styled from 'styled-components';

interface ListSectionProps {
  items: IListItem[];
  setItems: React.Dispatch<React.SetStateAction<IListItem[]>>;
  toggleCheckbox: (id: string) => void;
  deleteItem: (id: string) => void;
  removeCompleted: () => void;
}

const ListSectionWrapper = styled.article`
  box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.listShadow};
  border-radius: 5px;
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
  );
};

export default ListSection;
