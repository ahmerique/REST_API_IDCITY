var express = require('express');
const HttpStatus = require('http-status-codes');
var router = express.Router();


// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET some list
router.get('/somelist', function(req, res, next) {
  var liste_id = {"body": ["1","2"]};
  res.status(HttpStatus.OK).json(liste_id).send();  
});


module.exports = router;
