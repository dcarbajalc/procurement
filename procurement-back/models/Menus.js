const Sequelize = require('sequelize');


module.exports = sequelize.define(
 'menu',{
   modulo: {type: Sequelize.STRING(10),
    primaryKey: true,
    allowNull: false
  },
  id_menu :{
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull : false
  },

  nom:{
    type: Sequelize.STRING,
    allowNull : false
  },

  padre:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  orden:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  descri:{
    type: Sequelize.STRING,
    allowNull : false
  },
  ventana:{type: Sequelize.BOOLEAN},
  rama:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  evento:{
    type: Sequelize.STRING(50),
    allowNull:false
  }
 
 },{timestamps: false} 
);
