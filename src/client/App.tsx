import * as React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import { routes } from "./routes";
import { Context } from "./Context";

export const App: React.FC = () => {
  return (
    <>
      <Context>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
          // route error page
        </Switch>
      </Context>
    </>
  );
};

const StyledDiv = styled.div`
  color: red;
`;
