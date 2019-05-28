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

// Termina de verificar el token


router.get('/menusxusr', (req,res) =>{

  console.log(req.headers);
  const {num} = req.headers;


  let busca = `select * from menusxusr where num = ${num}`
  
  sequelize.query(busca, { bind: { status: 'active' }, type: sequelize.QueryTypes.SELECT })
  .then(data=>{ 
    res.send(data);
})
})

module.exports = router;
