import styled from 'styled-components';
import { FooterText } from '../atoms/typography';
import { ButtonStyle } from '../FilterButton';

export const List = styled.ul`
  align-items: center;
  background-color: var(--list-item-bg-color);
  border-radius: 0 0 5px 5px;
  display: flex;
  height: 3.125rem;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  vertical-align: middle;

  @media (min-width: 23.5rem) {
    height: 4.0625rem;
  }
`;

export const ItemsLeft = styled(FooterText)`
  color: var(--placeholder-color);
  display: inline-block;
  margin-left: 1.5625rem;
`;

export const Filters = styled.li`
  display: none;
  @media (min-width: 23.5rem) {
    display: block;
  }
`;

export const ClearButton = styled(ButtonStyle)`
  margin-right: 1.5625rem;
`;
