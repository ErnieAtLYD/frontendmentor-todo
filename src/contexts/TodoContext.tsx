import React, { useMemo } from 'react';
import {
  DndContext,
  DragEndEvent,
  closestCenter,
  useSensor,
  useSensors,
  Active,
  Over,
} from '@dnd-kit/core';
import { KeyboardSensor, PointerSensor } from '../helpers/dnd';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { IListItem } from '../interfaces';
import { IStateDispatch } from '../interfaces';

type TodoContextProps = IStateDispatch & { children: React.ReactNode };

export const TodoContext = ({
  state,
  dispatch,
  children,
}: TodoContextProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const reorderHandler = (
    items: IListItem[],
    active: Active,
    over: Over | null
  ) => {
    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === (over && over.id));
    return arrayMove(items, oldIndex, newIndex);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== (over && over.id)) {
      const newItems = reorderHandler(state.todos, active, over);
      dispatch({ type: 'SET_TODOS', payload: newItems });
    }
  };
  const itemIds = useMemo(
    () => state.todos.map((item) => item.id),
    [state.todos]
  );

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
