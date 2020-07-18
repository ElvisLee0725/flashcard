const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    stats: 'minimal',
  },
};
