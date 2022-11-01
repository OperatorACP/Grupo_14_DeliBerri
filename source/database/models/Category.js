module.exports = function (sequelize, DataTypes) {
  let alias = "category";

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  };

  let config = {
    tableName: "category",
    timestamps: false,
  };

  let category = sequelize.define(alias, cols, config);

  // category.associate = function (models) {
  //   category.hasMany(models.product, {
  //     as: "products",
  //    foreignKey: "id",
  //   });
  // };

  return category;
};
