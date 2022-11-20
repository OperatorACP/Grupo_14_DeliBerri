module.exports = function (sequelize, DataTypes) {
  let alias = "user";

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      notNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      notNull: true,
    },
    user: {
      type: DataTypes.STRING,
      notNull: true,
    },
    email: {
      type: DataTypes.STRING,
      notNull: true,
    },
    password: {
      type: DataTypes.STRING,
      notNull: true,
    },
    birthDate: {
      type: DataTypes.DATE,
      notNull: true,
    },
    nationality: {
      type: DataTypes.STRING,
      notNull: true,
    },
    interestCategory: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },

    isAdmin: {
      type: DataTypes.STRING,
    }

  };

  let config = {
    tableName: "users",
    timestamps: false,
  };

  let users = sequelize.define(alias, cols, config);

  return users;
};
