const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.send('API trabajando... mátenme por favor X(');
});

module.exports = router;
