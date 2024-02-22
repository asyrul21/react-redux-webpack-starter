const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      /* Typescript */
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json",
        },
      },
      /* SVG's */
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      /* Images and fonts */
      {
        test: /\.(jp(e*)g|gif|png|woff|woff2|eot|ttf)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      vars_and_mixins: path.join(__dirname, "../src/styles/vars_and_mixins"),
      //   fonts: path.join(__dirname, "src/library/styles/fonts"),
    },
  },
};
