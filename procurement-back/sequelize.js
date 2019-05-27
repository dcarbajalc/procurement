const Sequelize = require( 'sequelize');

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  {
    host: process.env.HOST_DB,
    dialect: 'mysql',
    operatorAliases: false
  }
)


module.exports = sequelize;
global.sequelize = sequelize; 