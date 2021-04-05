const user = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [ 7, 42 ],
      },
    },
  })

  // check table in db (create it if db doesn't exist)
  User.sync()

  return User
}

export default user
