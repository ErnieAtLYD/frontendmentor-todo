import React = require('react');
import {IListItem} from '../../interfaces';
import {HiddenCheckbox, CheckboxSVG, Wrapper} from './styles';

// https://www.evinced.com/blog/creating-accessible-styled-checkboxes/

interface CheckboxProps {
  item: IListItem;
  toggleCheckbox: (id: string) => void;
}

const Checkbox = ({item, toggleCheckbox}: CheckboxProps) => {
  return (
    <Wrapper>
      <HiddenCheckbox
        as="input"
        type="checkbox"
        id={item.id}
        onChange={() => {
          toggleCheckbox(item.id);
        }}
      />
      <CheckboxSVG
        active={item.completed}
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 4.3041L3.6959 7L9.6959 1"
          stroke={item.completed ? '#fff' : 'none'}
          strokeWidth="2"
          transform="translate(7, 8)"
        />
      </CheckboxSVG>
    </Wrapper>
  );
};

export default Checkbox;
