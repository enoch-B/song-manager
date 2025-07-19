const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [{ loader: 'file-loader' }],
      },
      {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
},

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new Dotenv()
  ]
};
// This Webpack configuration file is used to bundle the React application.