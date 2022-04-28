// We are making this styled component to be able to be used in the ListItem component
// and also in the DeleteItem component (as part of the CSS dependency injection)

import styled from 'styled-components';

const ListItemWrapper = styled.li`
  align-items: center;
  display: flex;
  height: 4.0625rem;
  background-color: ${({ theme }) => theme.listItemBgColor};
  border-bottom: 1px solid ${({ theme }) => theme.listItemBorderColor};
`;

export default ListItemWrapper;
