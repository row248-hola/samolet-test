const productionConfig = require('./webpack.config');

module.exports = {
  ...productionConfig,
  devtool: 'source-map',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
  },
};
