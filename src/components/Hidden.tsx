import styled from 'styled-components';

// Extended in the FormSection and FooterArea components

const Hidden = styled.button`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default Hidden;
