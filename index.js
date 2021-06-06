var express = require('express');
var app = express();
var user= require('./user_model.js');
var post=require('./post_model.js')
app.get('/', function(req,res) {
 res.render('./user_model',+'./post_model');
});

app.listen(3000, function() {
 console.log("Server is running at 3000 port!");
});