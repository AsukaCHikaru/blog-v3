import * as Express from "express";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { createStore } from "redux";
import { ServerStyleSheet } from "styled-components";

import { App } from "../client/App";
import { rootReducer } from "../client/service/reducer";

export const renderer = (app: Express.Application) => {
  app.get("*", (req: Express.Request, res: Express.Response) => {
    if (/main\.bundle\.js/.test(req.url)) {
      res.redirect("/main.bundle.js");
      return;
    }
    if (/vendor\.bundle\.js/.test(req.url)) {
      res.redirect("/vendor.bundle.js");
      return;
    }
    if (/favicon\.ico/.test(req.url)) {
      res.send("");
      return;
    }

    const context = {};
    const sheet = new ServerStyleSheet();
    let htmlBody = "";
    let styleTags = "";
    const store = createStore(rootReducer);
    try {
      htmlBody = ReactDOMServer.renderToString(
        sheet.collectStyles(
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>
          </Provider>
        )
      );
      styleTags = sheet.getStyleTags();
    } catch (error) {
      console.error(error);
    } finally {
      sheet.seal();
    }
    const initialState = JSON.stringify(store.getState());
    const fullHTML = getFullHTML(htmlBody, styleTags, initialState);
    res.send(fullHTML);
  });
};

export const getFullHTML = (
  htmlBody: string,
  styleTags: string,
  initialState: string
) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${styleTags}
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700;900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400&display=swap');
        </style>
      </head>
      <body>
        <div id="app-root">${htmlBody}</div>
        <script>window.__INITIAL_STATE__ = ${initialState}</script>
        <script src="main.bundle.js" type="text/javascript" charset="utf-8"></script>
        <script src="vendor.bundle.js" type="text/javascript" charset="utf-8"></script>
      </body>
    </html>
  `;
};
