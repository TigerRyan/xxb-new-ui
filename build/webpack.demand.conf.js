// 按需打包
const merge = require('webpack-merge');
const distCommonWebpackConfig = require('./webpack.common.conf');

module.exports = merge(distCommonWebpackConfig, {
  entry: {
    "/lib/layout/index": "./src/components/layout/index.js",
  }
});
