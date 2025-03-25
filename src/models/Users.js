const {sequelizer} = require("../config/db.js");
const {DataTypes} = require("sequelize");
// const {Account} = require("./Account.js");

const Users = sequelizer.define("Users",{
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    // account_number:{
    //     type: DataTypes.STRING(20),
    //     allowNull: false,
    //     references:{
    //         model: Account,
    //         key: "account_number"
    //     }
    // },
    first_name:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    last_name:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    phone_number:{
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },

}, {timestamps: true});

module.exports = {Users};
