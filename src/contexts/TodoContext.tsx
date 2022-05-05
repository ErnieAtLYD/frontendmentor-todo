import { useMemo } from 'react';
import {
  DndContext,
  DragEndEvent,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { KeyboardSensor, PointerSensor } from '../helpers/dnd';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { IListItem } from '../interfaces';

interface TodoContextProps {
  items: IListItem[];
  setItems: React.Dispatch<React.SetStateAction<IListItem[]>>;
  children: React.ReactNode;
}

export const TodoContext = ({
  items,
  setItems,
  children,
}: TodoContextProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== (over && over.id)) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex(
          (item) => item.id === (over && over.id)
        );
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  const itemIds = useMemo(() => items.map((item) => item.id), [items]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
};

export default TodoContext;
