const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    v1: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: `app.js`,
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /\/node_modules\//,
    }, {
      test: /\.css$/,
      use: [{
        loader: 'css-loader',
      },
      ]
    }],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      PropTypes: 'prop-types',
    }),
  ],
};
