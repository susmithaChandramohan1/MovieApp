var express = require('express');
var router = express.Router();
var m1=require('../model/movie');


router.get('/fav', function(req, res,next) {
m1.find({},function(err,docs){
  res.json(docs);
});
});


router.post('/my',function(req,res)
  {
 console.log(req.body);
 var movie=new m1();
 movie.Title=req.body.Title;
 movie.Type=req.body.Type;
 movie.Poster=req.body.Poster;
 movie.Year=req.body.Year;
 movie.imdbID=req.body.imdbID;
 movie.save(function(err)
{
 if(err)
 {
   res.send(err);
 }
 else
   {
     res.send('Movie added');
   }
 });
 });




 router.delete('/delet',function(req,res,next)
 {
 m1.findOneAndRemove({ imdbID: req.body.imdbID }, function(err) {
   if (err) {

     res.send(err);
   }
else {
  res.send('Movie deleted!');
}
 });
 });
 router.put('/update',function(req,res,next)
{
m1.findOneAndUpdate({imdbID:req.body.imdbID},{ Title: req.body.t}, function(err, user) {
  if (err) {
res.send(err);
  }
  else {
    res.send("updated successfully");
  }
});
});






module.exports = router;
