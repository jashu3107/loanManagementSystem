const { Sequelize} = require("sequelize");
const config = require("./index.js");

// console.log(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, config.DB_DIALECT, config.DB_HOST, config.DB_PORT)
const sequelizer = new Sequelize("LMS", "postgres", "midhun1234", {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    logging: false
});

try{
    sequelizer.authenticate();
    console.log('Connection has been established successfully.');
}catch(error){
    console.error('Unable to connect to the database:', error);
}

module.exports = {sequelizer};