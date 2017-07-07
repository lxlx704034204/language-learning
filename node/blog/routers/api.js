var express = require('express');
var router = express.Router();

var sendData;

router.use(function(req,res,next){
  sendData = {
    code : 0,
    message : ''
  }
  next();
});

router.post('/register',function(req,res,next){
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
