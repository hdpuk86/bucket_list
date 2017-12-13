var express = require('express');
var path = require('path');
var router = new express.Router();

var bucketlistRouter = new express.Router();



bucketlistRouter.get('/', function(req, res){
  db.collection('bucketlist').find().toArray(function(err, results){
    if(err){
      return console.log(err);
    }
    res.json(results);
  });
});

bucketlistRouter.post('/new', function(req, res){
  db.collection('bucketlist').save(req.body);
  res.redirect('/');
});


module.exports = bucketlistRouter;
