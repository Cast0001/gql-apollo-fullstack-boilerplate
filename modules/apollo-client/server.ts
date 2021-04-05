import { ApolloClient } from '@apollo/client/core'
import { InMemoryCache } from '@apollo/client/cache'
import { getRequestContext } from 'request-context'

import { createLink, typePolicies } from './util'


export const createApolloClient = (req: Server.Request) => {
  // we have single apollo client and single cookie on each request
  const cookie = getRequestContext().cookie

  // headers to pass through from client
  const userHeaders = [ 'x-real-ip', 'x-forwarded-for' ].reduce((result, key) => {
    if (req.headers[key]) {
      result[key] = req.headers[key]
    }

    return result
  }, {})

  const link = createLink({
    modifyOptions: (options) => ({
      ...options,
      headers: {
        ...options.headers,
        ...userHeaders,
        'cookie': cookie.getForRequest(),
      },
    }),
    modifyResponse: (response: Response) => {
      cookie.setFromResponse(response.headers.get('set-cookie'))

      return response
    },
  })

  return new ApolloClient({
    link,
    cache: new InMemoryCache({ typePolicies }),
    ssrForceFetchDelay: 100,
    ssrMode: true,
  })
}
