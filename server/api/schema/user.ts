import { gql } from 'apollo-server-express'


export default gql`
  extend type Query {
    user(email: String!): User
  }

  extend type Mutation {
    createUser(
      name: String
      email: String!
      password: String!
    ): User
  }

  type User {
    email: String!
    name: String
  }
`
