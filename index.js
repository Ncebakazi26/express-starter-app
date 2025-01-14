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

let counterS = 0;
let counterM = 0;
let counterL = 0;

let qty = 0

app.get('/', function(req, res) {
	const totalS = pizza.getSmall()
	const totalM = pizza.getMedium()
	const totalL = pizza.getLarge()
	const grandT = pizza.grandTotal()
   const qtyS = counterS ++;
   const qtyM = counterM++;
   const qtyL = counterL++;
	res.render('index', {
		totalS,
		totalM,
		totalL,
		grandT,
		// qtyS,
		// qtyM,
   		// qtyL
	});
});

app.post('/small', function(req, res) {
	var small = req.body.small
	 pizza.addS(small)
	const qty = ++counterS;
	res.redirect('/')	
});

app.post('/medium', function(req, res) {
	var medium = req.body.medium
	pizza.addM(medium)
		
	res.redirect('/')
});

app.post('/large', function(req, res) {
	var large = req.body.large
	pizza.addL(large)
	res.redirect('/')

});
// app.get('/add', function(req,res){
// })
// app.get('/subract', function(req,res){
// 	pizza.subract()

// 	res.redirect('/')

// })
app.get('/order', function(req,res){
	var  order=pizza.pizza_order()
	res.render('order',{order})
	//console.log(order)
})

// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});