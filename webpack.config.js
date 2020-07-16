const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const IP = require('ip');

module.exports = function(env) {
  return {
    mode: env && env.mode === 'production' ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
    plugins: [new CopyPlugin([{ from: path.resolve(__dirname, 'public') }])],
    devServer: {
      host: IP.address(),
      port: 3200,
      historyApiFallback: true,
      open: true,
      stats: 'errors-only',
      contentBase: path.resolve(__dirname, 'dist'),
    },
  };
};
