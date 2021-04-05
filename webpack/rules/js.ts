import type { RuleSetRule } from 'webpack'


export default (): RuleSetRule[] => ([
  {
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    },
  },
])
