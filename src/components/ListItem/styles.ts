import styled from 'styled-components';
import {BodyText} from '../atoms/typography';

// prettier-ignore
export const Label = styled(BodyText)<{ completed: boolean }>`
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
