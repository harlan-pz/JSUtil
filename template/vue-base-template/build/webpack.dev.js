const path = require('path')
const common = require('./webpack.base.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    contentBase: '../dist',
    historyApiFallback: true,
    port: 8008
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [],
  mode: 'development'
})