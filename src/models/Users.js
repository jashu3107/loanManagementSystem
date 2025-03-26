const {sequelizer} = require("../config/db.js");
const {DataTypes} = require("sequelize");

const Users = sequelizer.define("Users",{
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
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
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
}, {timestamps: false});

module.exports = {Users};
