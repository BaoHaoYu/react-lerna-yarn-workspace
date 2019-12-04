// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
import path from 'path'
// @ts-ignore
import precss from 'precss'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import * as webpack from 'webpack'

export default {
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, '../tsconfig.app.json'),
      }),
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.stories\.tsx?$/,
        enforce: 'pre',
        use: [
          {
            loader: '@storybook/addon-storysource/loader',
            options: { parser: 'typescript' },
          },
        ],
      },
      {
        test: /\.(tsx|jsx|ts)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              configFile: path.join(__dirname, '../.babelrc'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins() {
                return [precss]
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
} as webpack.Configuration
