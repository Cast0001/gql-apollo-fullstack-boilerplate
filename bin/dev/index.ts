import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemon from 'nodemon'
import express from 'express'
import webpack from 'webpack'
import serve from 'serve-static'
import webpackDevMiddleware from 'webpack-dev-middleware'
import type { Configuration, Compiler } from 'webpack'


dotenv.config()

process.env.ASSETS_PATH = process.env.ASSETS_PATH || 'http://localhost:3001/'

const compilerPromise = (name: string, compiler: Compiler) => (
  new Promise((resolve, reject) => {
    compiler.hooks.compile.tap(name, () => {
      console.log(`[${name}] Compiling `)
    })

    compiler.hooks.done.tap(name, (stats) => (
      stats.hasErrors() ? reject(`Failed to compile ${name}`) : resolve({})
    ))
  })
)

const start = async () => {
  // Build server and client
  const configs = await import('../../webpack/configs')
  const [ clientConfig, serverConfig ]: Configuration[] = configs.default

  const multiCompiler  = webpack([ clientConfig, serverConfig ])
  const clientCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'client')
  const serverCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'server')
  const serverPromise  = compilerPromise('client', clientCompiler)
  const clientPromise  = compilerPromise('server', serverCompiler)

  serverCompiler.watch({
    ignored: /node_modules/,
  }, (error, stats) => {
    console.log(stats.toString(serverConfig.stats))

    if (error) {
      console.error(error)
    }

    if (stats.hasErrors()) {
      const { errors } = stats.toJson()

      console.error(errors)
    }
  })

  // Run client
  const app = express()
  const clientPort = process.env.CLIENT_PORT

  app.use(cors())

  app.use(webpackDevMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
  }))

  // @ts-ignore
  app.use('/', serve(path.resolve('build/client')))

  app.listen(clientPort, () => {
    console.log(`Client App is listening on localhost:${clientPort}`)
  })

  try {
    await serverPromise
    await clientPromise
  }
  catch (error) {
    console.error(error)
    process.exit(1)
  }

  // Run server

  const server = nodemon({
    script: path.resolve(__dirname + '/server.ts'),
    watch: [ 'server/*', 'build/server' ],
    ignore: [ '*.map' ],
    signal: 'SIGHUP',
    delay: 200,
  })

  server.on('restart', () => {
    console.warn('SSR App has been restarted...')
  })

  server.on('quit', () => {
    console.log('Process ended')
    process.exit()
  })

  server.on('error', () => {
    console.error('An error occurred. Exiting')
    process.exit(1)
  })
}

start()
