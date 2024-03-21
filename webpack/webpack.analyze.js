const productionWebpack = require("./webpack.prod");
const { merge } = require("webpack-merge");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(productionWebpack, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      openAnalyzer: true
    })
  ]
});
