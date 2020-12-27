import * as webpack from "webpack";
import { resolve } from "path";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/client/index.tsx",
  context: resolve(__dirname),
  output: {
    filename: "client.bundle.js",
    path: resolve(__dirname, "dist", "static"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        CONTENTFUL_TOKEN: JSON.stringify(process.env.CONTENTFUL_TOKEN || ""),
        CONTENTFUL_SPACE_ID: JSON.stringify(
          process.env.CONTENTFUL_SPACE_ID || ""
        ),
      },
    }),
  ],
  devtool: "inline-source-map",
};

export default config;
