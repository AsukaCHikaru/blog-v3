import * as Express from "express";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";

import { App } from "../client/App";

export const renderer = (app: Express.Application) => {
  app.get("*", (req: Express.Request, res: Express.Response) => {
    if (/client\.bundle\.js/.test(req.url)) {
      res.redirect("/client.bundle.js");
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
    try {
      htmlBody = ReactDOMServer.renderToString(
        sheet.collectStyles(
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        )
      );
      styleTags = sheet.getStyleTags();
    } catch (error) {
      console.error(error);
    } finally {
      sheet.seal();
    }
    const fullHTML = getFullHTML(htmlBody, styleTags);
    res.send(fullHTML);
  });
};

export const getFullHTML = (htmlBody: string, styleTags: string) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${styleTags}
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700;900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400&display=swap');
        </style>
      </head>
      <body>
        <div id="app-root">${htmlBody}</div>
        <script src="client.bundle.js" type="text/javascript" charset="utf-8"></script>
      </body>
    </html>
  `;
};
