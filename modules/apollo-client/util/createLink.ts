import { from, ApolloLink } from '@apollo/client'
import { createHttpLink } from '@apollo/client/link/http'
import { RetryLink } from '@apollo/client/link/retry'
import { onError } from '@apollo/client/link/error'
// import logger from 'logger'


type CreateLinkProps = {
  modifyOptions?: (options: RequestInit) => RequestInit
  modifyResponse?: (response) => Response
}

// https://www.apollographql.com/docs/link/links/error/
// https://www.apollographql.com/docs/link/links/http/#errors
const errorLink = onError((error) => {
  // const { operation, graphQLErrors /* this is "errors" in network response */, networkError } = error
  // const { placement } = operation.getContext()

  // if (graphQLErrors) {
  //   logger.warn(`[GraphQL error]: ${operation.operationName} - ${placement}`, {
  //     extra: {
  //       errors: graphQLErrors,
  //     },
  //   })
  // }

  // if (networkError) {
  //   logger.warn(`[Network error]: ${networkError}`)
  // }
})

const fetch = __SERVER__ ? require('node-fetch') : window.fetch // eslint-disable-line

const createLink = (props?: CreateLinkProps) => {
  const { modifyOptions, modifyResponse } = props || {}

  const customFetch = (uri, options: RequestInit) => {
    // https://www.apollographql.com/docs/link/links/http/#dynamic-uri
    const { operationName } = JSON.parse(options.body as string)

    const urlWithName = `${uri}?opname=${operationName}`
    const modifiedOptions = typeof modifyOptions === 'function' ? modifyOptions(options) : options

    if (__DEV__) {
      // logger.debug(`[GraphQL]: ${operationName}`)
    }

    return fetch(urlWithName, modifiedOptions).then((response) => {
      if (typeof modifyResponse === 'function') {
        return modifyResponse(response)
      }

      return response
    })
  }

  // for legacy API we should use tokens
  // const modifyOptionsLink = new ApolloLink((operation, forward) => {
  //   if (__SERVER__) {
  //     return forward(operation)
  //   }

  //   const { legacy, tokenName } = operation.getContext()

  //   if (legacy && tokenName) {
  //     // set token to request input
  //     operation.variables.input.token = window.__TOKENS__[tokenName]
  //   }

  //   return forward(operation).map((response) => {
  //     if (legacy && response.data) {
  //       try {
  //         Object.keys(response.data).forEach((queryKey) => {
  //           const { token } = response.data[queryKey]

  //           if (token) {
  //             // update token from response
  //             window.__TOKENS__[tokenName] = token
  //           }
  //         })
  //       }
  //       catch (err) {
  //         logger.error(err)
  //       }
  //     }

  //     return response
  //   })
  // })

  return from([
    errorLink,
    // modifyOptionsLink,
    new RetryLink().split(
      (operation) => operation.getContext().legacy,
      createHttpLink({
        uri: 'localhost:3000/graphql',
        credentials: 'include',
        fetch: customFetch,
      })
      // createHttpLink({
      //   uri: 'https://test-api.scentbird.com/graphql',
      //   credentials: 'include',
      //   fetch: customFetch,
      // })
    ),
  ])
}


export default createLink
