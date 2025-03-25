const {sequelizer} = require("../config/db.js");
const {DataTypes} = require("sequelize")
const {Users} = require("./Users.js");
const {Account} = require("./Account.js");

const Loan = sequelizer.define("Loan",{
    loan_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Users,
            key: "user_id"
        }
    },
    account_number:{
        type: DataTypes.STRING(20),
        allowNull: false,
        references:{
            model: Account,
            key: "account_number"
        }
    },
    amount:{
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    interest_rate:{
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    loan_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    due_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    loan_status:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{timestamps: true});

module.exports = {Loan}