import path from 'path'
import webpack from 'webpack'
import WebpackBar from 'webpackbar'
import { merge } from 'webpack-merge'
import TerserPlugin from 'terser-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import LoadablePlugin from '@loadable/webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin'
import type { Configuration } from 'webpack'


import rules from './rules'


const clientBase: Configuration = {
  resolve: {
    modules: [
      'node_modules',
      path.resolve('src'),
      path.resolve('modules'),
    ],
    extensions: [ '.js', '.ts', '.tsx', '.scss' ],
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve('modules'),
    ],
  },
  name: 'client',
  target: 'web',
  entry: {
    client: path.resolve('src/client'),
  },
  output: {
    path: path.resolve('build'),
    filename: 'js/[name].[fullhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: rules.client,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('index.html'),
    }),
    new webpack.DefinePlugin({
      '__DEV__': process.env.NODE_ENV === 'development',
      '__CLIENT__': '1',
      '__SERVER__': '0',
    }),
    new LoadablePlugin({
      path: 'build',
      filename: 'loadableStats.json',
      writeToDisk: true,
    }),
    new WebpackBar({
      name: 'build',
      color: '#23ff78',
    }),
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'development' ? 'css/[name].css' : 'css/[name].[contenthash].css',
      chunkFilename: process.env.NODE_ENV === 'development' ? 'css/[id].css' : 'css/[id].[contenthash].css',
      ignoreOrder: true,
    }),
  ],
  node: false,
  stats: {
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    children: false,
    colors: true,
    hash: false,
    modules: false,
    reasons: false,
    timings: true,
    version: false,
  },
}

const dev = merge(clientBase, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  performance: {
    hints: false,
  },
})

const prod = merge(clientBase, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new DuplicatePackageCheckerPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
    ],
    emitOnErrors: true,
  },
})


export default { dev, prod } as { [key: string]: Configuration }
