import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { routes } from "./routes";
import { GlobalStyle } from "./components/GlobalStyle";
import { theme } from "./theme";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
        // route error page
      </Switch>
    </ThemeProvider>
  );
};
