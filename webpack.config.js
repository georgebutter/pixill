const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlConfig = {
  title: 'Pixel',
  meta: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    author: 'George Butter',
    description: process.env.npm_package_description,
    keywords: 'Pixel Art Canvas',
    charset: 'utf8',
  },
};

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  mode,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, 'dist'),
    }),
    new HtmlWebpackPlugin({
      ...htmlConfig,
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    watchContentBase: true,
    proxy: [
      {
        context: ['/'],
        target: 'http://localhost:3000', // server and port to redirect to
        secure: false, // don't use https
      },
    ],
    overlay: {
      warnings: true, // default false
      errors: true, // default false
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  // },
};
