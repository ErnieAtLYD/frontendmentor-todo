import styled from 'styled-components';

export const ListSectionWrapper = styled.article`
  box-shadow: var(--list-shadow);
  border-radius: 5px;
`;

export const MobileListSectionWrapper = styled(ListSectionWrapper)`
  background-color: var(--list-item-bg-color);
  font-size: 0.875rem;
  margin-top: 1rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 23.5rem) {
    display: none;
  }
`;
