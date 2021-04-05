import { getRequestContext } from 'request-context'
import { createApolloClient } from 'apollo-client/server'


const apolloClient = async (req, res, next) => {
  const context = getRequestContext()

  if (!context.apolloClient) {
    context.apolloClient = createApolloClient(req)
  }

  next()
}


export default apolloClient
