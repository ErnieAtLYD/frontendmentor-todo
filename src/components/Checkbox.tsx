import { IListItem } from '../interfaces/';
import styled from 'styled-components';
import Hidden from './Hidden';

// https://www.evinced.com/blog/creating-accessible-styled-checkboxes/

interface CheckboxProps {
  item: IListItem;
  toggleCheckbox: (id: string) => void;
}

const Wrapper = styled.div.attrs({ 'data-no-dnd': true })`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled(Hidden)``;

// prettier-ignore
const CheckboxSVG = styled.svg<{ active: boolean }>`
  background-color: var(--list-item-bg-color);
  border: 2px solid var(--list-item-border-color);
  border-radius: 50%;
  display: inline-block;
  height: 1.25rem;
  margin-right: 1.25rem;
  width: 1.25rem;

  ${({ active }) =>
    active &&`
    border: 2px transparent double;
    background: var( --checkbox-gradient);
    background-origin: border-box;
  `}

  &:hover {
    border: 2px blue solid; // FIXME
  }

  @media (min-width: 23.5rem) {
    height: 1.5rem;
    margin-right: 1.5rem;
    width: 1.5rem;
  }
`;

const Checkbox = ({ item, toggleCheckbox }: CheckboxProps) => {
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
