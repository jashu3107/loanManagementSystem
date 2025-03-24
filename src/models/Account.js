const {sequelizer} = require("../config/db.js")
const {DataTypes} = require("sequelize")
const {Users} = require("./Users.js");

const Account = sequelizer.define("Account",{
    account_number:{
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
    },
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        references:{
            model: Users,
            key: "user_id"
        }
    },
    bank_name:{
        type: DataTypes.STRING(50),
        allowNull: true
    },
    branch_name:{
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {timestamps: true})

module.exports = {Account}