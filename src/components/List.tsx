import React, { useMemo } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import ListItemWrapper from './ListItemWrapper';
import { IListItem } from '../interfaces';
import TodoContext from '../contexts/TodoContext';

interface IListProps {
  filter: string;
  items: IListItem[];
  setItems: React.Dispatch<React.SetStateAction<IListItem[]>>;
  toggleCheckbox: (id: string) => void;
  deleteItem: (id: string) => void;
}

const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;

  ${ListItemWrapper}:first-child {
    border-radius: 5px 5px 0 0;
  }
`;

const List = ({
  items,
  setItems,
  filter,
  toggleCheckbox,
  deleteItem,
}: IListProps) => {
  const filteredItems = items.filter((item: IListItem): boolean => {
    if (filter === 'active') {
      return item.completed === false;
    } else if (filter === 'completed') {
      return item.completed === true;
    }
    return true;
  });

  const itemIds = useMemo(() => items.map((item) => item.id), [items]);
  console.log(itemIds);

  return (
    <ListWrapper>
      <TodoContext items={items} setItems={setItems}>
        {filteredItems.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            item={item}
            toggleCheckbox={toggleCheckbox}
            deleteItem={deleteItem}
          />
        ))}
      </TodoContext>
    </ListWrapper>
  );
};

export default List;
