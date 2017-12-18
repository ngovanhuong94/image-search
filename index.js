var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// required for env vars
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useMongoClient: true });

var apiRoutes = require('./routes/api');

var app = express();
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));

app.use('/api', apiRoutes);
app.get('/', (req,res) => {
	res.render('index')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server is running ${PORT}...`));