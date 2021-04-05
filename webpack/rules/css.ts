import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type { RuleSetRule } from 'webpack'


export default ({ isClient }): RuleSetRule[] => [
  {
    test: /\.css$/,
    use: isClient
      ? [ MiniCssExtractPlugin.loader, 'css-loader' ]
      : [ 'css-loader' ],
  },
]
