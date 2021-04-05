import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type { RuleSetRule } from 'webpack'


export default ({ isClient }): RuleSetRule[] => {
  const loaders: RuleSetRule['use'] = [
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: process.env.NODE_ENV === 'development' ? '[local]_[hash:base64:4]' : '[hash:base64:6]',
          exportOnlyLocals: !isClient,
        },
        importLoaders: 2,
        sourceMap: true,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        additionalData: '@import "scss/index";',
        sassOptions: {
          includePaths: [
            path.resolve('src'),
          ],
        },
        sourceMap: true,
      },
    },
  ]

  if (isClient) {
    loaders.unshift({
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: process.env.ASSETS_PATH,
      },
    })
  }

  return [
    {
      test: /\.scss$/,
      use: loaders,
    },
  ]
}

