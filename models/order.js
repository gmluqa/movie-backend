'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Product)
      Order.belongsTo(models.User)

    }
  }
  Order.init({
    User_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Users',

        },
        key: 'id'
      },
      allowNull: false
    },
    Product_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Products',

        },
        key: 'id'
      },
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};