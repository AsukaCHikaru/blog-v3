import * as Express from "express";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";

import { App } from "../client/App";

export const renderer = (app: Express.Application) => {
  app.get("*", (req: Express.Request, res: Express.Response) => {
    const reactApp = ReactDOMServer.renderToString(<App />);
    const fullHTML = getFullHTML(reactApp);
    res.send(fullHTML);
  });
};

export const getFullHTML = (reactApp: string) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div id="app-root">${reactApp}</div>
        <script src="client.bundle.js" type="text/javascript" charset="utf-8"></script>
      </body>
    </html>
  `;
};
