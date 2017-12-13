var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./controllers/index'));

app.use(express.static("client/build"));

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
  // Works like mong in that if it doesnt exist it will create it.
  "mongodb://localhost:27017/countries_bl",
  function(err, client){
  if(err){
    return console.log(err);
  }
  // Make db global so the entire application can access db.
  db = client.db("countries_bl");
  console.log('Connected to DB');
  // Don't fire up the server until connected to the DB.
  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});


app.get("/", function(req, res){
	res.sendFile(__dirname + "/client/build/index.html");
});
