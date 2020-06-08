const merge = require("webpack-merge");
const path = require("path");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: "production",
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    path: pah.resolve('./dist'),
    chunkFilename: '[id].js',
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),    
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
});
