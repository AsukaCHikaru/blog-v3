import * as React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import { routes } from "./routes";
import { PostListPage } from "./pages/PostListPage";
import { PostPage } from "./pages/PostPage";

export const App: React.FC = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route {...route} key={index} />
      ))}
      // route error page
    </Switch>
  );
};

const StyledDiv = styled.div`
  color: red;
`;
