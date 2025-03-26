'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('Account',{
      account_number:{
        type: Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false
    },
    user_id:{
        unique: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'Users',
            key: "user_id"
        }
    },
    bank_name:{
        type: Sequelize.STRING(50),
        allowNull: true
    },
    branch_name:{
        type: Sequelize.STRING(50),
        allowNull: true
    }, 
    },{timestamps: true})
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('Account');
  }
};
