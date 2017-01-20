const express = require('express');
const app = express();


// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment 
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);


var server = app.listen(1337, function(){
	console.log('listening on port 1337');
});

app.use('/', function(req, res, next){
	console.log("hi!");
	next();
});

app.get('/', function(req, res, next){
	res.render('index');
}),

