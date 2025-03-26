'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('Users', {
      user_id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      first_name:{
          type: Sequelize.STRING(50),
          allowNull: false
      },
      last_name:{
          type: Sequelize.STRING(50),
          allowNull: false
      },
      email: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true
      },
      phone_number:{
          type: Sequelize.STRING(10),
          allowNull: false,
          unique: true
      },
  
  },{timestamps: false});  
},

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('Users');
  }
};
