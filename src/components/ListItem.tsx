import styled from 'styled-components';
import {BodyText} from './atoms/typography';
import {useSortable} from '@dnd-kit/sortable';
// eslint-disable-next-line node/no-extraneous-import
import {CSS} from '@dnd-kit/utilities';

import {IListItem} from '../interfaces/';
import Checkbox from './Checkbox';
import DeleteIcon from './DeleteIcon';
import ListItemWrapper from './ListItemWrapper';
import {ActionProps} from '../interfaces';

interface ListItemProps {
  dispatch: React.Dispatch<ActionProps>;
  id: string;
  item: IListItem;
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

function ListItem({dispatch, id, item}: ListItemProps) {
  const {attributes, listeners, setNodeRef, transform, transition} =
    useSortable({id});

  const style = {transform: CSS.Transform.toString(transform), transition};

  return (
    <ListItemWrapper
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <Label as="label" completed={item.completed} htmlFor={item.id}>
        <Checkbox
          item={item}
          toggleCheckbox={() => {
            dispatch({type: 'TOGGLE_TODO', payload: item.id});
          }}
        />
        {item.text}
      </Label>
      <DeleteIcon
        handleClick={() => dispatch({type: 'REMOVE_TODO', payload: item.id})}
      />
    </ListItemWrapper>
  );
}

export default ListItem;
