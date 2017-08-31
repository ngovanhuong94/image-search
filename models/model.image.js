var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ImageShema = new Schema({
	url: String,
	thumbnail: String,
	snippet: String,
	context: String
})


module.exports = mongoose.model('Images', ImageShema);