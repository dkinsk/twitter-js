var express = require( 'express' );
var app = express(); // creates an instance of an express application
var port = 3000;
var volleyball = require('volleyball')

app.listen(port, (request, respond) => {
	console.log('server listening: ', port);
});

// app.use(function(request, respond, next){
// 	console.log(request.method,request.url,respond.statusCode)
// 	next();
// });

app.use(volleyball)

app.get('/news', (request, respond, next) => {
	respond.send('news')
});

app.get('/', (request, respond, next) => {
	respond.send('welcome')
});

