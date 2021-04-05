import { ApolloServer } from 'apollo-server-express'

import resolvers from './resolvers'
import models from './models'
import schema from './schema'


const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: () => ({ models }),
})


export default (app) => server.applyMiddleware({ app, path: '/graphql' })
