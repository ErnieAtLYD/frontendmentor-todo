// We are making this styled component to be able to be used in the ListItem component
// and also in the DeleteItem component (as part of the CSS dependency injection)

import styled from 'styled-components';

const ListItemWrapper = styled.li`
  align-items: center;
  display: flex;
  height: 4.0625rem;
  border-bottom: 1px solid #e3e4f1;
`;

export default ListItemWrapper;
