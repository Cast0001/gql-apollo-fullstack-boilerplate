import { Sequelize, DataTypes } from 'sequelize'

import user from './user'


const sequelize = new Sequelize(process.env.DEV_DB_CONFIG)

const models = {
  User: user(sequelize, DataTypes),
}

export { sequelize }

export default models
