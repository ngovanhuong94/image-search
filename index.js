var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://huong:123456@ds119064.mlab.com:19064/image-search-freecc')


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


app.listen(process.env.PORT || 3000, console.log('Server is running'));