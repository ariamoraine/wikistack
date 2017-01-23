const express = require('express');
const wikiRouter = express.Router();
//const bodyParser = require('body-parser');

//wikiRouter.use(bodyParser());

wikiRouter.get('/', function(req, res, next) {
  res.redirect('/');
});

wikiRouter.post('/', function(req, res, next) {
  //res.send('got to POST /wiki/');
  console.log(req.body);
  res.render('index.html', req.body);
  //next();
});

wikiRouter.get('/add', function(req, res, next) {
  res.render('addpage');
});


module.exports = wikiRouter;
