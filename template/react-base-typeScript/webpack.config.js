const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [
          {
            loader: 'source-map-loader' 
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      titel: 'Set Up Project',
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  devServer: {
    inline: true,
    port: 8008,
    historyApiFallback: true,
  }
};

