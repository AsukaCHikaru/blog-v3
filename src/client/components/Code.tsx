import * as React from 'react';
import styled from 'styled-components';

interface OwnProps {}

export const Code: React.FC<OwnProps> = ({ children }) => {
  return (
    <pre>
      <StyledCode>{children}</StyledCode>
    </pre>
  );
};

const StyledCode = styled.code`
  display: inline-block;
  width: 100%;
  padding: 0;
  font-size: 15px;
  color: #363636;
  overflow-x: scroll;
  line-height: 1.5;
`;