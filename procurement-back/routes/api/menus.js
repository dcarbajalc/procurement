const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const mysql = require ('mysql');


const menu = require ('../../models/Menus');

const connection = mysql.createConnection({
  host:process.env.HOST_DB,
  user:process.env.USER_DB,
  password:process.env.PASSWORD_DB,
  database:process.env.DB
})

// middleware verify token:

verify =() =>{

}

// Termina de verificar el token


router.get('/menusxusr', (req,res) =>{

  const {num} = req.headers;

  let busca = `select * from menusxusr where num = ${num}`
  
  sequelize.query(busca, { bind: { status: 'active' }, type: sequelize.QueryTypes.SELECT })
  .then(data=>{ 
    res.send(data);
})
});

router.get('/ruta',(req,res)=>{
  const {num,ruta} = req.headers;
  
  let busca = `select evento from menusxusr where num = ${num} and evento = '${ruta}'`
  sequelize.query(busca, { bind: { status: 'active' }, type: sequelize.QueryTypes.SELECT })
  .then(dato=>{ console.log(dato);
    res.send(dato);
})
})

module.exports = router;
