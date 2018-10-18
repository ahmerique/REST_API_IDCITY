var express = require('express');
const HttpStatus = require('http-status-codes');
var router = express.Router();

//GET some list
router.get('/search', function(req, res, next) {
  var words = req.query.words;
  var list_words=words.split('|')
  
  var list_id={'id': list_words}
  res.status(HttpStatus.OK).send(list_id);  
});

module.exports = router;
