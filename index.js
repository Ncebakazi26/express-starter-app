const express = require('express');
const exphbs  = require('express-handlebars');
const pizza_app = require('./pizza_app')

const app = express();
const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const pizza = pizza_app()

let counter = 0;

app.get('/', function(req, res) {
	res.render('index', {
		
	});
});

app.post('/small', function(req, res) {

	// var qty = ++counter;
	// var cost = 31.99 * qty;														
	// var orderS = req.body.small
	// const pizzaS = pizza.addS({
	// 	pizzaStemp:orderS
	// })
	// console.log(pizzaS)
	var small = req.body.small
	const pizzaS = pizza.addS({
		pizza_small : small
	})
	
	res.render('index', {
		pizzaS
		
	})
});

app.post('/medium', function(req, res) {
	var medium = req.body.medium
	const pizzaM = pizza.addM({
		pizza_medium: medium
	})
	
	
});

app.post('/large', function(req, res) {
	var large = req.body.large
	const pizzaL = pizza.addL({
		pizza_large: large
	})

});
// app.get('/small', function(req, res) {
// 	const 
// });

// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});