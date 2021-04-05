import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'


export { ApolloProvider } from '@apollo/client'
export { useApolloClient, useSubscription, useLazyQuery } from '@apollo/client/react/hooks'
export { makeVar } from '@apollo/client/cache'
export type { ApolloClient } from '@apollo/client'

export { default as useQuery } from './useQuery'
export { default as useMutation } from './useMutation'

export const getApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  if (__SERVER__) {
    return require('request-context').getRequestContext().apolloClient
  }
  else {
    return require('./client').default
  }
}
