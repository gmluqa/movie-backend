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
        type: Sequelize.ENUM("Movie", "Series")
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Rating: {
        type: Sequelize.FLOAT
      },
      Genre: {
        type: Sequelize.STRING
      },
      EpInWeek: {
        type: Sequelize.BOOLEAN
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