import { useMutation as useApolloMutation } from '@apollo/client'
import type { MutationHookOptions, MutationTuple } from '@apollo/client/react/types/types'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { OperationVariables } from '@apollo/client/core'
import type { DocumentNode } from 'graphql'


type Result<TData, TVariables> = [
  MutationTuple<TData, TVariables>[0],
  Omit<MutationTuple<TData, TVariables>[1], 'loading'> & { isFetching: boolean }
]

const useMutation = <TData = any, TVariables = OperationVariables>(
  mutation: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: MutationHookOptions<TData, TVariables>
): Result<TData, TVariables> => {
  const [ mutate, { loading, ...rest } ] = useApolloMutation(mutation, options)

  return [
    mutate,
    {
      isFetching: loading,
      ...rest,
    },
  ]
}


export default useMutation
