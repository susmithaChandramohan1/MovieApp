var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");


describe("Testing /movie/my Method", function(err){
 it("should respond", function(done){
   url
       .post("/movie/my")
       .expect(200)
       .end(function(err,res){
         res.text.should.be.equal("Movie added");
         done();
       });

 });
});

describe("Testing /movie/fav Method ", function(err){
 it("should respond", function(done){
   url
       .get("/movie/fav")
       .expect(200)
       .expect('Content-Type', /json/)
       .end(function(err,res){
         var myObj = JSON.parse(res.text);
         console.log(myObj);
         myObj[0].Title.should.be.equal("saiguru");
         done();
       });

 });
});
describe("Testing /movie/update Method ", function(err){
 it("should resopnd", function(done){
   url
       .put("/movie/update")
       .expect(200)
       .end(function(err,res){
         res.text.should.be.equal("updated successfully");
         done();
       });
});
 });

 describe("Testing /movie/delet Method ", function(err){
   it("should resopnd", function(done){
     url
         .delete("/movie/delet")
         .expect(200)
         .end(function(err,res){
           res.text.should.be.equal("Movie deleted!");
           done();
         });
 });
   });
