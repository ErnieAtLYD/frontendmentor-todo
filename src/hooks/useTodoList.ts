import { useState } from 'react';
import { IListItem } from '../interfaces/';
import { v4 as uuid } from 'uuid';

export const useTodoList = () => {
  const [items, setItems] = useState<IListItem[]>([]);

  const addItem = (textContent: string) => {
    setItems([...items, { id: uuid(), text: textContent, completed: false }]);
  };

  const toggleCheckbox = (id: string) => {
    setItems(
      items.map((item: IListItem) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const deleteItem = (id: string) => {
    setItems(items.filter((item: IListItem) => item.id !== id));
  };

  const removeCompleted = () => {
    setItems(items.filter((item: IListItem) => !item.completed));
  };

  return { items, addItem, deleteItem, removeCompleted, toggleCheckbox };
};