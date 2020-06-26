const productionConfig = require('./webpack.config');
const path = require('path');

module.exports = {
  ...productionConfig,
  mode: 'development',
  devtool: 'source-map',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
  },
};
