---
title: apollo-client
---

State management library provides an `ApolloClient` instance
for graphql data fetching and global state management on client or server.


## Main logic

Apollo hooks such as useQuery or useMutation use this instance from the
context, provided by ApolloProvider, but also it can be used without Apollo
hooks in action functions, if you import it directly:

:::warning

Use of `gql` function is prohibited. Store all queries in separate files and import their TS representation.
Read more in Query preprocessing section.

:::


:::important

Import all apollo related things from `apollo-client` package. Don't use `@apollo/client` directly.

:::

```js title="graph/example/index.ts"
import { getApolloClient } from 'apollo-client'

import query from './query.graphql'
import mutation from './mutation.graphql'


const variables = {
  input: {
    id: 1,
  },
}

const fetchQuery = () => (
  getApolloClient().query({ query, variables })
)

const fetchMutation = () => (
  getApolloClient().mutate({ mutation, variables })
)
```

## Custom fetch

### Named urls

We use a custom fetch function to add an additional query parameter
`?name=QueryName` on graphql url, it gives us the ability to distinguish
requests in the network panel, which simplifies the debugging process.

This name will be parsed from .graphql file. For example, if the file will
contain `query Me {`, then the query parameter will be `?name=Me`.

This logic placed in the `getLink` function from `apollo-client/util` and
used to create Apollo Link, that passed into ApolloClient constructor.


### Custom links

Apollo Link also includes the logic for custom api link
(test-api.scentbird.com/graphql or test.scentbird.com/graphql) 

By default apolloClient fetches the data from the new api, but you can pass
`legacy` property to the context and it will make fetch from the old api:

```js
const { data } = useQuery(oldApiQuery, {
  context: {
    legacy: true,
  }
})

// Or without hook
const fetchQuery = () => (
  getApolloClient().query({
    query: oldApiQuery,
    context: {
      legacy: true,
    },
  })
)
```


:::tip

You can name your file as `<name>.legacy.graphql` to use legacy api 
for syntax highlight and types generation.

:::

## Server side

### Context

:::warning

This functionality may be removed if we will not use actions from `graph/*`
on the server

:::

Node instance can handle multiple requests at the same time,
using `request-context` we set apolloClient on the server to the request
context to be sure that it will be used within the exact request.

This implemented to be able to call actions from `graph/*` on server.

We add apolloClient to request context in `server/middleware/apolloClient.ts`:

```js title="server/middleware/apolloClient.ts"
import { getRequestContext } from 'request-context'
import { createApolloClient } from 'apollo-client/server'

const apolloClient = async (req, res, next) => {
  const context = getRequestContext()

  if (!context.apolloClient) {
    context.apolloClient = createApolloClient(req)
  }

  await next()
}

export default apolloClient
```

After that we can access created instance using `getRequestContext`:

```js title="modules/apollo-client/index.ts"
require('request-context').getRequestContext().apolloClient
```


### Custom headers

On the server, apolloClient instance will be created for every request, and to
handle authorization we have to pass cookies from the web server request
to apolloClient headers.


### Custom fetch function

ApolloClient use window.fetch function to make requests. But on server
we don't have window as well as window.fetch, so in `getLink`
we import the external fetch function from `node-fetch` library and pass
it into apollo link, to make requests on the server.


## Client side

On the client side we create apolloClient instance once and pass it to
`ApolloProvider` in the same way as on the server, but we do it in the Root
container (`containers/Root/Root`).

We don't need to change headers in order to change cookies as we do on
the server, because of apolloClient use document.cookie instead.


## Query preprocessing 

We must store all queries in `.graphql` files to support code highlights and 
syntax check. But we process all these files before use.

:::important

We don't support direct `.graphql` import. Use generated TS files.

:::

To process project graphql files use `npm run graphql` or `npm run graphql:watch`
commands. In watch mode the generator process all found files and watch for changes.

We automatically run `npm run graphql` before build. In dev mode we run `npm run graphql:watch`
 in parallel with the builder, so you don't need to run them by you own.

### Types generation

We process all `.graphql` files by `graphql-codegen` and convert them into `.graphql.ts`.
You can change the config in `codegen.js`.

`graphql-codegen` generates two big files with all constants, enums and types: 
`src/typings/graphql.ts` and `src/typings/legacy.graphql.ts` for legacy endpoint.

For each `.graphql` file it generates typed representation with things like:
- Variables and Payload types;
- Query in form of AST TypedDocumentNode.

For example, we have `products.graphql`:

```graphql
query Products($input: ProductsInput!) {
  products(input: $input) {
    id
    name
    brandInfo {
      name
    }   
  }
}
```

The result `products.graphql.ts` file will export:
- `ProductsQueryVariables` and `ProductsVariables` as alias;
- `ProductsQueryPayload` and `ProductsPayload` as alias;
- `ProductsDocument` as default export typed as `TypedDocumentNode<ProductsQueryVariables, ProductsQueryPayload>`.

All `.graphql.ts` import common types from the common file and reuse common fragments.

### TypedDocumentNode

We use [TypedDocumentNode](https://github.com/dotansimha/graphql-typed-document-node) to support easy types integration 
into graphql.

Apollo supports this standard and type system just works out of the box:

```tsx
import { useQuery } from 'apollo-client'
import productsQuery from './products.graphql'

const Component = () => {
  const { data } = useQuery(productsQuery, {
    variables: {
      // variables has ProductsVariables type
      input: {
        ids: [10]
      } 
    } 
  })

  // data has ProductsPayload type
}
```

## Global state management

When apollo makes a request, the response will be saved in the apollo
cache.

On repeated requests, it returns the previously saved result from the
cache.

In each case when we need to receive a state we should make a request
and if it is not in the cache, it will be requested from the server.

To force the request and get a new result from the server
you can use the `refetch` function from the apollo hooks.

The result of requests executed on the server is passed to the client
in `window.__APOLLO_STATE__` and is used in creating apolloClient
on the client side:

```js title="modules/apollo-client/client.ts"
const cache = new InMemoryCache({
  typePolicies,
})

const apolloClient = new ApolloClient({
  link: createLink(),
  cache: cache.restore(window.__APOLLO_STATE__),
})
```


## Reactive variables

If you need to create a state that doesn't exist on the server, use
reactive variables.

To create such variables is used `makeVar` function from @apollo/client:

```ts title="graph/google/index.ts"
import { makeVar } from 'apollo-client'

// type generated using `npm run graphql:start`
import type { GooglePayload } from './googleGQL'

export const googleVar = makeVar<GooglePayload['google']>({
  isInitialized: false,
  isCookiesError: false,
  isFetching: false,
  isFetched: false,
})
```

To bind this variable to the apollo cache, you need to add it to typePolicies in `apollo-client/util/cache`:

```js title="apollo-client/util/cache.ts"
import { googleVar } from 'graph/google'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        google: {
          read () {
            return googleVar()
          },
        },
      },
    },
  },
})
```

You can get this variable in the same way as other data from Apollo
by making a request. Because of this is only a client variable, there is
no need to request it from the backend, so to remove it from a query use
the `@client` directive.

```graphql title="graph/google/google.graphql"
query Google {
  google @client {
    isInitialized
    isCookiesError
    isFetching
    isFetched
  }
}
```


### Reactive variable types

Reactive variable doesn't exist in the scheme received from the backend,
so to generate its types you need first to add them in the graphql schema
in `graph/cacheSchema.graphql`:

```graphql title="graph/cacheSchema.graphql"
type Google {
  isInitialized: Boolean!
  isCookiesError: Boolean!
  isFetching: Boolean!
  isFetched: Boolean!
}

extend type Query {
  google: Google!
}
```


### Change reactive variable state

To change reactive variable state you can create action in the file
where it was defined:

```js title="graph/google/index.ts"
export const toggleFetched = () => {
  const { isFetched, ...rest } = googleVar()

  return googleVar({
    ...rest,
    isFetched: !isFetched,
  })
}
```


## Apollo documentation

[Read apollo documentation](https://www.apollographql.com/docs/react/)
