const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

//MiddleWare para checar si tiene permiso a la ventana:

function ChecaABCUsuarios(req, res, next) {
  let {num}= req.headers;

 var id_menu = 3;

 let busca = `select * from menusxusr where num = ${num} and id_menu = ${id_menu}`;
  
 sequelize.query(busca, { bind: { status: 'active' }, type: sequelize.QueryTypes.SELECT })
 .then(data=>{ 
   console.log(data);
   if (data.length=== 1){return next()}
   else {res.send([{err: 'Al parecer no tienes permisos'}])}
})


};


router.get('/abcusr',ChecaABCUsuarios, (req,res) =>{

  let busca = `select A.num,A.nom,A.email,A.id_rol,B.descri,A.active from usuarios as A join roles as B on A.id_rol = B.id_rol`

  sequelize.query(busca, { bind: { status: 'active' }, type: sequelize.QueryTypes.SELECT })
  .then(data=>{ 
    res.send(data);
})
.catch (err =>{
  console.log('treata de meterse alguien sin permiso!!! :', err)
})
});


module.exports = router;