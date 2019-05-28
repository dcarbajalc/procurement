const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const mysql = require ('mysql');


//Queries:
registrausr = (nom,mail,pass) => `CALL registrausr('${nom}','${mail}','${pass}')`;
actualizausr = (mail,pass) => `CALL actualizausr ('${mail}','${pass}')`;
actualizapropiacontra = (num, pass) => `CALL actualizapropiacontra ('${num}','${pass}')`;
actualizaDatosOtroUsuario = (num,nom,email,id_rol,active) => 
`UPDATE usuarios set nom ='${nom}' , email ='${email}', id_rol ='${id_rol}' , active = '${active}'  where num = ${num};`
// Terminan los queries a la hermosa y muy noble Base de Datos!!!

// Conecto a la BD:
const connection = mysql.createConnection({
  host:process.env.HOST_DB,
  user:process.env.USER_DB,
  password:process.env.PASSWORD_DB,
  database:process.env.DB
})
// termina la parte de la conexión!!!


router.post("/register", (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const {nom, mail,passw} = req.body;
  const hasshedPassword = bcrypt.hashSync(passw, salt);
  connection.query(
    registrausr(nom, mail, hasshedPassword)
     ,(err,results)=>{
         if (err) {
           return res.json({err,
           message:'Error en general al conectar a la BD'})
       }
       else {
           return res.json({
            results
           })
       }
   })
});


router.post('/actusr', (req,res)=>{
  const salt = bcrypt.genSaltSync(10);
  const {mail,passw} = req.body;
  const hasshedPassword = bcrypt.hashSync(passw, salt);
  connection.query(
    actualizausr(mail,hasshedPassword)
     ,(err,results)=>{
         if (err) {
           return res.json({err,
           message:'Error en general al conectar a la BD'})
       }
       else {
           return res.json({
            results
           })
       }
   })
});

router.post('/actdatausr', (req,res) =>{
  
  const {num,nom,email,id_rol,active} = req.body;
  connection.query(
    actualizaDatosOtroUsuario (num,nom,email,id_rol,active)
    ,(err,results)=>{
      if(err){
        return res.json({err,
        message: 'No se ha podido actualizar a este usuario!!!'})
      }
      else {
        return res.json({
          results
        })
      }
    }
  )
});

module.exports = router;