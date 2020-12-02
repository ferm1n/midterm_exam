const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'index.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /.node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};