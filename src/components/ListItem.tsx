import styled from 'styled-components';
import { BodyText } from './atoms/typography';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { IListItem } from '../interfaces/';
import Checkbox from './Checkbox';
import DeleteIcon from './DeleteIcon';
import ListItemWrapper from './ListItemWrapper';

interface ListItemProps {
  id: string;
  item: IListItem;
  toggleCheckbox: (id: string) => void;
  deleteItem: (id: string) => void;
}

// prettier-ignore
const Label = styled(BodyText)<{ completed: boolean }>`
  color: var(--list-item-color);
  margin-left: 1.25rem;
  flex-grow: 1;

  ${({ completed }) =>
    completed && `
    text-decoration: line-through;
    color: var(--strike-thru-color);
  `}

  @media (min-width: 23.5rem) {
    margin-left: 1.5rem;
  }
`;

function ListItem({ id, item, toggleCheckbox, deleteItem }: ListItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <ListItemWrapper
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <Label as="label" completed={item.completed} htmlFor={item.id}>
        <Checkbox item={item} toggleCheckbox={toggleCheckbox} />
        {item.text}
      </Label>
      <DeleteIcon handleClick={() => deleteItem(item.id)} />
    </ListItemWrapper>
  );
}

export default ListItem;
