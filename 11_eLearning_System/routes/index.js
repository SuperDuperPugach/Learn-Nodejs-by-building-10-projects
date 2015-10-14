var express = require('express');
var router = express.Router();

Class = require('../models/class');


router.get('/', function(req, res, next) {
  Class.getClasses(function(err, classes){
    if(err){
      console.log(err);
      res.send(err);
    } else {

      console.log(classes);
      res.render('index', { "classes": classes});
    }
  },3);

});

module.exports = router;