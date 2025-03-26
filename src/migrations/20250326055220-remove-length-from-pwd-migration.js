'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.changeColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Users', 'password',{
      type: Sequelize.STRING(50),
      allowNull: false
    })
  }
};
