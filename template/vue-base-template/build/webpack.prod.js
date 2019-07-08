const path = require('path')
const common = require('./webpack.base.js')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      // {
      //   loader: 'image-webpack-loader',
      //   options: {
      //     //   bypassOnDebug: true,
      //     mozjpeg: {
      //       progressive: true,
      //       quality: 65
      //     },
      //     optipng: {
      //       enabled: false,
      //     },
      //     pngquant: {
      //       quality: '65-90',
      //       speed: 4
      //     },
      //     gifsicle: {
      //       interlaced: false,
      //     }
      //   },
      // },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    })
  ]
})