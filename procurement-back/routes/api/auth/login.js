
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

const usuario = require ('../../../models/Usuarios');


router.post("/mail", (req, res) => {
  const {email, passw} = req.body;

  usuario.findAll({where:{ email: email, active: true}})
  .then(data => {    
    let user = data[0].dataValues;
    if(!user) return res.status(404).json({
      error: {},
      message: "Email incorrecto"
    });
    const passwordIsValid = bcrypt.compareSync(passw, user.pass);
    
    if(!passwordIsValid) return res.status(401).json({
      error: {},
      message: "Contraseña incorrecta"
    });
   jwt.sign({ num: user.num }, 
   process.env.SECRET, 
   {expiresIn: 86400}, function(err, token) {
     delete user.pass;
     delete user.id_rol;
     delete user.active;
    res.status(200).json({token,user})
  });
  
  })
  .catch(err =>{ console.log('Esto sale en el CATCH: ',err)})
});




module.exports = router;



