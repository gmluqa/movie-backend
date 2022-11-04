'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ContentType: {
        type: Sequelize.ENUM
      },
      Name: {
        type: Sequelize.STRING
      },
      Rating: {
        type: Sequelize.FLOAT
      },
      Genre: {
        type: Sequelize.STRING
      },
      NextEpDate: {
        type: Sequelize.DATE
      },
      TheatrePass: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};