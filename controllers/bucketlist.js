var express = require('express');
var path = require('path');
var router = new express.Router();

var bucketlistRouter = new express.Router();

var Country = require('../client/src/country.js');


bucketlistRouter.get('/', function(req, res){
  db.collection('bucketlist').find().toArray(function(err, results){
    if(err){
      return console.log(err);
    }
    res.json(results);
  });
});

bucketlistRouter.post('/new/:country', function(req, res){
  var country = JSON.parse(req.params.country);
  db.collection('bucketlist').save(country);
  res.redirect('/');
});


module.exports = bucketlistRouter;
