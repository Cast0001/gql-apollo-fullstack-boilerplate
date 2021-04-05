import React from 'react'
import path from 'path'
import { ChunkExtractorManager, ChunkExtractor } from '@loadable/server'
import { ApolloProvider } from 'apollo-client'
import { renderToStringWithData } from '@apollo/client/react/ssr'
import { getRequestContext } from 'request-context'
import { StaticRouter as Router } from 'react-router-dom'
import { FilledContext, HelmetProvider } from 'react-helmet-async'
import { DeviceProvider } from 'device'
// import logger from 'logger'

import App from 'containers/App/App'
import Routes from 'containers/Routes/Routes'


const loadableStatsFile = path.resolve('build/loadableStats.json')

const appHtml = async (req, res, next) => {
  const helmetContext = {} as FilledContext
  const routerContext = {} as any // as RouterContext

  const loadableExtractor = new ChunkExtractor({
    statsFile: loadableStatsFile,
    publicPath: process.env.ASSETS_PATH,
    entrypoints: [ 'client' ],
  })

  const apolloClient = getRequestContext().apolloClient
  // const history = createHistory(routerContext)
  // const locationHook = createLocationHook(req.url)

  req.context.appHtml = await renderToStringWithData(
    <ChunkExtractorManager extractor={loadableExtractor}>
      <ApolloProvider client={apolloClient}>
        <HelmetProvider context={helmetContext}>
          <DeviceProvider value={req.context.device}>
            <Router location={req.url} context={routerContext}>
              <App>
                <Routes />
              </App>
            </Router>
          </DeviceProvider>
        </HelmetProvider>
      </ApolloProvider>
    </ChunkExtractorManager>
  )

  if (routerContext.url) {
    req.context.redirectUrl = routerContext.url
  }
  else {
    const scriptTags = loadableExtractor.getScriptTags()
    const styleTags = loadableExtractor.getStyleTags()

    req.context.helmet = helmetContext.helmet
    req.context.initialApolloState = apolloClient.extract()
    req.context.loadableTags = {
      scripts: scriptTags,
      styles: styleTags,
    }
  }

  next()
}


export default appHtml
