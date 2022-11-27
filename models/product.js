'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Order)
    }
  }
  Product.init({
    ContentType: DataTypes.ENUM("Movie", "Series"),
    Name: DataTypes.STRING,
    Poster: DataTypes.STRING,
    Rating: DataTypes.FLOAT,
    Genre: DataTypes.STRING,
    EpInWeek: DataTypes.BOOLEAN,
    TheatrePass: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};