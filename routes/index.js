var express = require('express');
const HttpStatus = require('http-status-codes');
var router = express.Router();

//GET search bar
router.get('/', function(req, res, next) {
  var words = req.query.words;
  var list_words=words.split('|')
  
  var list_id={'id': list_words}
  res.status(HttpStatus.OK).send(list_id);  
});

//POST entry form 
router.post('/', function(req, res, next) {
  console.log("element1 "+req.body.element1)
  res.status(HttpStatus.OK).send(req.body);  
});


module.exports = router;
