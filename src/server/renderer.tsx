import * as Express from "express";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { Helmet, HelmetData } from "react-helmet";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { createStore } from "redux";
import { ServerStyleSheet } from "styled-components";

import { App } from "../client/App";
import {
  rootReducer,
  RootState,
  STORE_STATUS,
} from "../client/service/reducer";
import { initStore } from "./store";

export const renderer = (app: Express.Application) => {
  app.get("*", async (req: Express.Request, res: Express.Response) => {
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

    const { postListState, postState } = await initStore(req);

    if (postState.status === STORE_STATUS.POST_NOT_FOUND) {
      res.redirect("/404");
      return;
    }
    
    const preloadedState: RootState = {
      postList: postListState,
      post: postState,
      asset: { status: STORE_STATUS.IDLE, data: {} },
    };

    const context = {};
    const sheet = new ServerStyleSheet();
    let htmlBody = "";
    let styleTags = "";
    const store = createStore(rootReducer, preloadedState);
    let helmet;

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
      helmet = Helmet.renderStatic();
      styleTags = sheet.getStyleTags();
    } catch (error) {
      console.error(error);
    } finally {
      sheet.seal();
    }
    const initialState = encodeURIComponent(JSON.stringify(store.getState()));

    const fullHTML = getFullHTML(htmlBody, styleTags, initialState, helmet);
    res.send(fullHTML);
  });
};

export const getFullHTML = (
  htmlBody: string,
  styleTags: string,
  initialState: string,
  helmet?: HelmetData
) => {
  return `
    <!DOCTYPE html>
    <html ${helmet?.htmlAttributes.toString()}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${styleTags}
        ${helmet?.title.toString()}
        ${helmet?.meta.toString()}
        ${helmet?.link.toString()}
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700;900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400&display=swap');
        </style>
      </head>
      <body ${helmet?.bodyAttributes.toString()}>
        <div id="app-root">${htmlBody}</div>
        <script>window.__INITIAL_STATE__ = ${initialState}</script>
        <script defer src="main.bundle.js" type="text/javascript" charset="utf-8"></script>
        <script defer src="vendor.bundle.js" type="text/javascript" charset="utf-8"></script>
      </body>
    </html>
  `;
};
