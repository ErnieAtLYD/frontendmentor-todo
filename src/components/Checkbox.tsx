import { IListItem } from '../interfaces/';
import styled from 'styled-components';

// https://www.evinced.com/blog/creating-accessible-styled-checkboxes/

interface CheckboxProps {
  item: IListItem;
  toggleCheckbox: (id: string) => void;
}

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

// prettier-ignore
const CheckboxSVG = styled.svg<{ active: boolean }>`
  background: #fff;
  border: 2px #ddd solid;
  border-radius: 50%;
  display: inline-block;
  height: 1.5rem;
  margin-right: 24px;
  width: 1.5rem;

  ${({ active }) => active && `
    border: 2px transparent double;
    background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    background-origin: border-box;
    // background-clip: content-box, border-box;
  `}

  &:hover {
    border: 2px blue solid; // FIXME
  }
`;

const Checkbox = ({ item, toggleCheckbox }: CheckboxProps) => {
  return (
    <Wrapper>
      <HiddenCheckbox
        id={item.id}
        onChange={() => {
          toggleCheckbox(item.id);
        }}
      />
      <CheckboxSVG
        active={item.completed}
        aria-hidden='true'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 4.3041L3.6959 7L9.6959 1'
          stroke={item.completed ? '#fff' : 'none'}
          strokeWidth='2'
          transform='translate(7, 8)'
        />
      </CheckboxSVG>
    </Wrapper>
  );
};

export default Checkbox;
