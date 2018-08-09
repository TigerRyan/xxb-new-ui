const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./base.conf');
const pkg = require('../package.json');

module.exports = merge(baseWebpackConfig, {
    output: {
      path: path.join(__dirname, '../dist'),
      publicPath: '/dist/',
      filename: "[name].js",
      chunkFilename: "[name].js",
      library: 'xxb-ui',           // 将打包后的模块存在于全局的变量 xxb-ui 上面
      libraryTarget: 'umd',        // 指定你的模块输出类型，commonjs, AMD, script形式, UMD模式
      umdNamedDefine: true         // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    },
    externals: {
      vue: 'vue'
    },
    plugins: [
      new webpack.BannerPlugin(pkg.name + ' v' + pkg.version + ' by XuGang (c) ' + new Date().getFullYear() + ' Licensed ' + pkg.license),
      new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
      new webpack.optimize.OccurrenceOrderPlugin()
    ]
});
