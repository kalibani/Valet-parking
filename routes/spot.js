var express = require('express');
var router = express.Router();
var models = require('../models')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('spots');
});

router.get('/add', function(req, res, next) {
  res.render('add_parkir');
});


router.get('/spotkosong', function(req, res, next) {
  res.render('spotkosong');
});

module.exports = router;
