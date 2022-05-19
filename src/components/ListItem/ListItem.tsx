import {useSortable} from '@dnd-kit/sortable';
// eslint-disable-next-line node/no-extraneous-import
import {CSS} from '@dnd-kit/utilities';
import {useContext} from 'react';
import {TodoAppContext} from '../../contexts/TodoAppContext';

import {IListItem} from '../../interfaces';
import Checkbox from '../Checkbox';
import DeleteIcon from '../DeleteIcon';
import ListItemWrapper from '../ListItemWrapper';
import {Label} from './styles';

interface ListItemProps {
  id: string;
  item: IListItem;
}

function ListItem({id, item}: ListItemProps) {
  const {dispatch} = useContext(TodoAppContext);

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
