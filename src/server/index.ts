import * as Express from "express";
import { resolve } from "path";

import { renderer } from "./renderer";

const APP_PORT = process.env.PORT || 3000;
const app = Express();

app.use("/static", Express.static(resolve(__dirname, "../static")));

renderer(app);

app.listen(APP_PORT, () => {
  console.log(`Server is listening on ${APP_PORT}`);
});
