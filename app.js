var express = require( 'express' );
var app = express(); // creates an instance of an express application
var port = 3000;
var volleyball = require('volleyball')
var nunjucks = require('nunjucks')

app.listen(port, (request, respond) => {
	console.log('server listening: ', port);
});

// app.use(function(request, respond, next){
// 	console.log(request.method,request.url,respond.statusCode)
// 	next();
// });

app.use(volleyball)
// app.use(nunjucks)

app.get('/news', (request, respond, next) => {
	respond.send('news')
});

app.get('/', (request, respond, next) => {
	respond.render('index.html',locals)
});

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

// nunjucks.configure('views'); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks