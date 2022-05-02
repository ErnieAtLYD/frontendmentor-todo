// We are making this styled component to be able to be used in the ListItem component
// and also in the DeleteItem component (as part of the CSS dependency injection)

import styled from 'styled-components';

const ListItemWrapper = styled.li`
  align-items: center;
  display: flex;
  height: 3.25rem;
  background-color: ${({ theme }) => theme.listItemBgColor};
  border-bottom: 1px solid ${({ theme }) => theme.listItemBorderColor};

  @media (min-width: 23.5rem) {
    height: 4.0625rem;
  }
`;

export default ListItemWrapper;
