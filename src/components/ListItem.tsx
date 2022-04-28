import styled from 'styled-components';
import { IListItem } from '../interfaces/';
import Checkbox from './Checkbox';
import DeleteIcon from './DeleteIcon';
import ListItemWrapper from './ListItemWrapper';

interface ListItemProps {
  item: IListItem;
  toggleCheckbox: (id: string) => void;
  deleteItem: (id: string) => void;
}

// prettier-ignore
const Label = styled.label<{ completed: boolean }>`
  color: #494c6b;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: -0.25px;
  margin-left: 24px;
  flex-grow: 1;

  ${({ completed }) => completed &&`
    text-decoration: line-through;
    color: #D1D2DA;
  `}
`;

function ListItem({ item, toggleCheckbox, deleteItem }: ListItemProps) {
  return (
    <ListItemWrapper>
      <Label completed={item.completed} htmlFor={item.id}>
        <Checkbox item={item} toggleCheckbox={toggleCheckbox} />
        {item.text}
      </Label>
      <DeleteIcon handleClick={() => deleteItem(item.id)} />
    </ListItemWrapper>
  );
}

export default ListItem;
