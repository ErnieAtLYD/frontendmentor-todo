import styled from 'styled-components';
import { IListItem } from '../interfaces/';
import Checkbox from './Checkbox';
import DeleteIcon from './DeleteIcon';
import ListItemWrapper from './ListItemWrapper';

let strikeThruColor: string;

interface ListItemProps {
  item: IListItem;
  toggleCheckbox: (id: string) => void;
  deleteItem: (id: string) => void;
}

// prettier-ignore
const Label = styled.label<{ completed: boolean }>`
  color: ${({ theme }) => {
    strikeThruColor = theme.strikeThruColor;
    return theme.listItemColor
  }};
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: -0.25px;
  margin-left: 1.5rem;
  flex-grow: 1;

  ${({ completed }) =>
    completed &&
    `
    text-decoration: line-through;
    color: ${strikeThruColor}};
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
