const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      exclude: /node_modules/
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.less$/,
      loader:  'style-loader!css-loader!less-loader',
      exclude: /node_modules/
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      exclude: /node_modules/
    },{
      test: /\.json$/,
      loader: 'json-loader',
      exclude: /node_modules/
    },{
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader'
    },{
      test: /\.ttf/,
      loader: 'file-loader',
      exclude: /node_modules/
    }]
  },
  resolve: { alias: { 'vue': 'vue/dist/vue.js' } },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
          postcss: [
            require('autoprefixer')({
                browsers: ['Android >= 4', 'Explorer >= 10', 'iOS >= 6'], cascade: false
            })
          ]               
        }
    })      
  ]
};
