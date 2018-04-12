var express = require('express');
var router = express.Router();

var user1 = require('../model/user');
/* GET users listing. */



router.get('/', function(req, res, next) {
  res.send("send to response");
});



router.post('/userinsert/:userid/:password',function(req,res)
{
  var user=new user1();
  user.username=req.params.userid;
  user.password=req.params.password;
  user.save(function(err){
    if(err){
      res.send(err);
    }
    else{
      res.send("user created");
    }
  });

});

router.delete('')




module.exports = router;
