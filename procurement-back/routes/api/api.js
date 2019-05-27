
const express = require ('express');
const router = express.Router();
const mysql = require ('mysql');
// Queries para obtener informaciòn:
const select_usuarios = 'select * from usuarios';
select_usuario =(a) => `select * from usuarios where num = ${a}`;


const connection = mysql.createConnection({
    host:process.env.HOST_DB,
    user:process.env.USER_DB,
    password:process.env.PASSWORD_DB,
    database:process.env.DB
})

router.get('/usuarios',(req,res)=>{
    connection.query(
     select_usuarios
      ,(err,results)=>{
          if (err) {
            return res.json({err,
            message:'Error al encontrar usuarios'})
        }
        else {
            return res.json({
             results
            })
        }
    })
});


router.get('/usuario', (req,res) =>{
  const {num} = req.query;
  console.log(req.query);
  connection.query(
      select_usuario(num)
      ,(err,results)=>{
          if (err) { console.log(err);
              res.json ({err, message: 'No paso el query'})
          }
          else {
              console.log( `Acaba de hacerte una peticiòn para conocer al usuario ${num} O_O'`);
              return res.json({
                  results
              })
          }
      })});

module.exports = router;