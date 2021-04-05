export default {
  Query: {
    user: async (_parent, { email }, { models }) => (
      await models.User.findOne({ where: { email } })
    ),
  },
  Mutation: {
    createUser: async (_parent, input, { models }) => (
      await models.User.create(input)
    ),
  },
}
