import type { RuleSetRule } from 'webpack'


const createLoader = (path: string, isClient: boolean): RuleSetRule => ({
  loader: 'file-loader',
  options: {
    name: '[name]_[contenthash:6].[ext]',
    outputPath: `${path}/`,
    publicPath: `${process.env.ASSETS_PATH}${path}/`,
    // If true, emits a file (writes a file to the filesystem). If false, the loader will return a public URI
    // but will not emit the file. It is often useful to disable this option for server-side packages.
    emitFile: isClient,
  },
})


export default ({ isClient }): RuleSetRule[] => [
  {
    test: /images.*\.(png|jpg|jpeg)(\?.*)?$/,
    use: [
      createLoader('images', isClient),
    ],
  },
  {
    test: /images.*\.(svg)(\?.*)?$/,
    use: [
      createLoader('images-svg', isClient),
    ],
  },
]
