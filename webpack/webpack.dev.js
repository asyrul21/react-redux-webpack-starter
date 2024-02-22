const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    historyApiFallback: true,
    static: {
      /* path to index.html */
      directory: path.resolve(__dirname, "../public"),
    },
    devMiddleware: {
      index: "index.html",
      /**
       *  writeToDisk: tell webpack to write to dist/ folder as server is running
       */
      writeToDisk: true,
    },
    client: {
      /**
       * show errors on browser as overlay
       */
      overlay: true,
    },
    liveReload: false,
  },
  module: {
    rules: [
      /* Styles / CSS and SCSS */
      {
        test: /\.(css|scss)$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: '@use "vars_and_mixins" as *;',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public", "index.html"),
    }),
  ],
});
