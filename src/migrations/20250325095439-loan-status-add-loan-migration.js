'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('Loan', 'loan_status',{
      type: Sequelize.STRING(50),
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('Loan', 'loan_status')
  }
};
