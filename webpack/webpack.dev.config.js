const path = require('path');
const webpack = require('webpack');

const parentDir = path.join(__dirname, '../');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    path.join(parentDir, 'src/index.jsx')
  ],
  output: {
    path: path.join(parentDir + 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-0']
        }
      }, {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /\.s[a|c]ss$/,
        loaders: ['sass-loader', 'style-loader', 'css-loader']
      }, {
        test: /\.(html)$/,
        loader: 'html-loader'
      }, {
        test: /\.(png|jpg|gif|svg|ico|eot|ttf|woff|woff2)$/,
        include: /images/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 5000,
    host: 'localhost',
    contentBase: parentDir,
    historyApiFallback: true
  }
};
