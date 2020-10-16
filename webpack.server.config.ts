import * as webpack from "webpack";
import { resolve } from "path";
import * as nodeExternals from "webpack-node-externals";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/server/index.ts",
  context: resolve(__dirname),
  output: {
    filename: "server.bundle.js",
    path: resolve(__dirname, "dist", "server"),
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: [nodeExternals()],
};

export default config;
