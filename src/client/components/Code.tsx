import * as React from 'react';
import styled from 'styled-components';
import * as prism from 'prismjs';

interface OwnProps {}

export const Code: React.FC<OwnProps> = ({ children }) => {

  React.useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <div className="code">
      <pre>
        <StyledCode className={`language-javascript`}>{children}</StyledCode>
      </pre>
    </div>
  );
};

const StyledCode = styled.code`
  display: inline-block;
  width: 100%;
  padding: 0;
  font-size: 15px;
  overflow-x: scroll;
  line-height: 1.5;
`;