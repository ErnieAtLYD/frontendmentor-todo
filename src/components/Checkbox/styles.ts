import styled from 'styled-components';
import Hidden from '../Hidden';

export const Wrapper = styled.div.attrs({ 'data-no-dnd': true })`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled(Hidden)``;

// prettier-ignore
export const CheckboxSVG = styled.svg<{ active: boolean }>`
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
