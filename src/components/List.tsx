import ListItem from './ListItem';
import { IListItem } from '../interfaces';

interface IListProps {
  items: IListItem[];
  filter: string;
  toggleCheckbox: (id: string) => void;
  deleteItem: (id: string) => void;
}

const List = ({ items, filter, toggleCheckbox, deleteItem }: IListProps) => {
  const filteredItems = items.filter((item: IListItem): boolean => {
    if (filter === 'active') {
      return item.completed === false;
    } else if (filter === 'completed') {
      return item.completed === true;
    }
    return true;
  });
  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {filteredItems.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          toggleCheckbox={toggleCheckbox}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

export default List;
