import React from 'react';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import { KeyboardSensor, PointerSensor } from '../helpers/dnd';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import styled from 'styled-components';
import ListItem from './ListItem';
import ListItemWrapper from './ListItemWrapper';
import { IListItem } from '../interfaces';
// import ToDoDnDContext from './ToDoDnDContext';

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

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    console.log('handleDragEnd', event);
    const { active, over } = event;
    if (active.id !== (over && over.id)) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex(
          (item) => item.id === (over && over.id)
        );
        console.log(oldIndex, newIndex);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <ListWrapper>
      {/* <ToDoDnDContext items={items} setItems={setItems}> */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {filteredItems.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              item={item}
              toggleCheckbox={toggleCheckbox}
              deleteItem={deleteItem}
            />
          ))}
        </SortableContext>
      </DndContext>
      {/* </ToDoDnDContext> */}
    </ListWrapper>
  );
};

export default List;
