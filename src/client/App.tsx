import * as React from "react";

export const App: React.FC = () => {
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return <div onClick={handleClick}>{`app counter ${counter}`}</div>;
};
