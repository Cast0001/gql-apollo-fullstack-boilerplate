'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((transaction) => {
      return Promise.all([
        queryInterface.addColumn('users', 'name', Sequelize.DataTypes.STRING, { transaction }),
      ])
    })
  },

  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction((transaction) => {
      return Promise.all([
        queryInterface.removeColumn('users', 'name', { transaction }),
      ])
    })
  },
}
