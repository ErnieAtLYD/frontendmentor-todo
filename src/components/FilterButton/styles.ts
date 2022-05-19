import styled from 'styled-components';
import {FooterText} from '../atoms/typography';

export const ButtonStyle = styled(FooterText)`
  background: none;
  border: 0;
  color: var(--placeholder-color);
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0;
  margin: 0 0.5625rem;

  &:disabled,
  &[disabled] {
    color: var(--footer-active-color);
  }

  &:hover {
    text-decoration: underline;
    color: var(--list-item-color);
  }
`;
