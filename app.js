const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
var wikiRouter = require('./routes/wiki');
var env = nunjucks.configure('views', {noCache: true});
const models = require('./models');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.use('/wiki/', wikiRouter);
//app.use('/', bodyParser);

models.User.sync({})
.then(function () {
  return models.Page.sync({});
})
.then(function () {
  app.listen(1337, function(){
   console.log('listening on port 1337');
  });
})
.catch(console.error);

// app.use('/', function(req, res, next){
// 	console.log(req.body);
// 	next();
// });

app.get('/', function(req, res, next){
	res.render('index');
});

