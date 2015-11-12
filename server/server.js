var express = require('express');
var app = express(),
requireDir = require('require-dir'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
newsession = require('express-session'),
fs   = require('fs'),
routes = requireDir('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));





///Static files
app.use('/css', express.static('../build/css'));
app.use('/js', express.static('../build/js'));
app.use('../fonts', express.static('../build/fonts'));
app.set('view engine', 'ejs');
app.set('views','../ui/views');



app.use(cookieParser('bc4ApP456KlI'));

for (var i in routes) app.use('/', routes[i]);



if (!module.parent) {
  app.listen(3000);
  console.log('app started on port 3000');
}