import type { RuleSetRule } from 'webpack'


export default (): RuleSetRule[] => ([
  {
    test: /fonts.*\.(ttf|eot|svg|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'fonts/',
      publicPath: `${process.env.ASSETS_PATH}fonts/`,
    },
  },
])
