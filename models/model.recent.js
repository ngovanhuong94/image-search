var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recentSchema = new Schema({
	term: String,
    when: {
    	type: Date,
    	default: Date.now()
    }
})


module.exports = mongoose.model('Recent', recentSchema);