import { useQuery as useApolloQuery } from '@apollo/client'
import type { QueryHookOptions, QueryResult } from '@apollo/client/react/types/types'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { OperationVariables } from '@apollo/client/core'
import type { DocumentNode } from 'graphql'


type Result<TData, TVariables> = Omit<QueryResult<TData, TVariables>, 'loading'> & { isFetching: boolean }

const useQuery = <TData = any, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<TData, TVariables>
): Result<TData, TVariables> => {
  const { loading, ...rest } = useApolloQuery(query, options)

  return {
    isFetching: loading,
    ...rest,
  }
}


export default useQuery
