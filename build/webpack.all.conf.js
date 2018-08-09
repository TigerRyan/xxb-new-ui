// 全量打包
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const distCommonWebpackConfig = require('./webpack.common.conf');

module.exports = merge(distCommonWebpackConfig, {
  entry: {
    'xxb-ui': './src/xxb-ui.js',
    'xxb-js-api': './src/xxb-js-api.js',
    'xxb-ui-flexible': './src/xxb-ui.flexible.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        loaders: {
          less: ExtractTextPlugin.extract('css-loader!less-loader')
        }              
      }
    }),
    new ExtractTextPlugin('xxb-ui.css')     
  ],
});
