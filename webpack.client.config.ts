import * as webpack from "webpack";
import * as path from "path";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/client/main.ts",
  context: path.resolve(__dirname),
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "dist", "client"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
};

export default config;
