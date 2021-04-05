import React from 'react'
import ReactDOM from 'react-dom'
// import { IntlProvider } from 'intl'
import { DeviceProvider } from 'device'
import { HelmetProvider } from 'react-helmet-async'
import { loadableReady } from '@loadable/component'
import { ApolloProvider, getApolloClient } from 'apollo-client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from 'containers/App/App'
import Routes from 'containers/Routes/Routes'
// import ErrorBoundary from 'containers/ErrorBoundary/ErrorBoundary'


const apolloClient = getApolloClient()

const Root = () => (
  <ApolloProvider client={apolloClient}>
    <HelmetProvider>
      <DeviceProvider value={window.__DEVICE__}>
        <Router>
          <App>
            <Routes />
          </App>
        </Router>
      </DeviceProvider>
    </HelmetProvider>
  </ApolloProvider>
)

loadableReady().then(() => {
  ReactDOM.hydrate(<Root />, document.getElementById('root'))
})
