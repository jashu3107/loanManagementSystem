'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('Loan',{
      loan_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'Users',
            key: "user_id"
        }
    },
    account_number:{
        type: Sequelize.STRING(20),
        allowNull: false,
        references:{
            model: 'Account',
            key: "account_number"
        }
    },
    amount:{
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false
    },
    interest_rate:{
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false
    },
    loan_date:{
        type: Sequelize.DATE,
        allowNull: false
    },
    due_date:{
        type: Sequelize.DATE,
        allowNull: false
    },
    },{timestamps: true})
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('Loan');
  }
};
