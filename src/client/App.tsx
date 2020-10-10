import * as React from "react";
import styled from "styled-components";

export const App: React.FC = () => {
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <StyledDiv onClick={handleClick}>{`app counter ${counter}`}</StyledDiv>
  );
};

const StyledDiv = styled.div`
  color: red;
`;
