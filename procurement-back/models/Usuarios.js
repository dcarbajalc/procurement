const Sequelize = require('sequelize');


module.exports = sequelize.define(
 'usuario',{
   num: {type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  nom :{
    type: Sequelize.STRING(200),
    allowNull : false
  },

  email:{
    type: Sequelize.STRING(200),
    allowNull : false
  },

  pass:{
    type: Sequelize.STRING(100),
    allowNull: false
  },
  id_rol:{
    type: Sequelize.INTEGER,
    references: 'roles',
    referencesKey: 'id_rel'
  },
  active:{type: Sequelize.BOOLEAN},
 
 },{timestamps: false} 
);
