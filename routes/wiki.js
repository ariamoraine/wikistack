const express = require('express');
const wikiRouter = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;


wikiRouter.get('/', function(req, res, next) {
  res.redirect('/');
});

wikiRouter.post('/', function(req, res, next) {
  //res.send('got to POST /wiki
  var url = req.body.title.split(" ").join("_").replace(/\W/g, '');

  var page = Page.build({
    title: req.body.title,
    content: req.body.content,
    urlTitle: Page.generateUrlTitle()
  });
  console.log(req.body);
  res.render('index.html', req.body);
  //next();

  page.save();
});

wikiRouter.get('/add', function(req, res, next) {
  res.render('addpage');
});


module.exports = wikiRouter;
