import path from 'path'
import webpack from 'webpack'
import WebpackBar from 'webpackbar'
import { merge } from 'webpack-merge'
import nodeExternals from 'webpack-node-externals'
import type { Configuration } from 'webpack'

import rules from './rules'


const serverBase: Configuration = {
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
  name: 'server',
  target: 'node',
  entry: {
    server: path.resolve('server/index'),
  },
  output: {
    path: path.resolve('build/server'),
    filename: '[name].js',
    // to enable app export
    libraryTarget: 'commonjs',
  },
  externals: [
    nodeExternals({
      allowlist: [
        /\.css$/,
      ],
    }),
    {
      'build/client/loadableStats.json': 'commonjs2 build/client/loadableStats.json',
    },
    'react-helmet',
  ],
  module: {
    rules: rules.server,
  },
  plugins: [
    new WebpackBar({
      name: 'server',
      color: '#ff8500',
    }),
    new webpack.DefinePlugin({
      '__DEV__': process.env.NODE_ENV === 'development',
      '__CLIENT__': '0',
      '__SERVER__': '1',
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1, // avoid creating multiple chunks
    }),
  ],
  stats: {
    assets: false,
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    children: false,
    colors: true,
    hash: false,
    modules: false,
    performance: false,
    reasons: false,
    timings: true,
    version: false,
  },
}

const dev = merge(serverBase, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  performance: {
    hints: false,
  },
})

const prod = merge(serverBase, {
  mode: 'production',
  devtool: 'source-map',
})


export default { dev, prod } as { [key: string]: Configuration }
