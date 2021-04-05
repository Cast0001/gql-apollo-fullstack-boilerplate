import { ApolloClient } from '@apollo/client/core'
import { InMemoryCache } from '@apollo/client/cache'
import { createLink, typePolicies } from './util'


const cache = new InMemoryCache({
  typePolicies,
})

const apolloClient = new ApolloClient({
  link: createLink(),
  cache: cache.restore(window.__APOLLO_STATE__),
  connectToDevTools: true,
})


export default apolloClient
