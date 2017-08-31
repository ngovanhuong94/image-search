var express = require('express');
var router = express.Router();
var Images = require('../models/model.image');
var Recent = require('../models/model.recent');

router.get('/imagesearch/:keyword',async function(req,res){
	// console.log(req.params.keyword);
	// console.log(req.query.offset);
    var keyword = req.params.keyword;
    var offset = Number(req.query.offset) || parseInt(req.query.offset) || 1;
    
    var data = await Images.find({$or: [{url: {$regex: keyword, $options: 'i'}},{thumbnail: {$regex: keyword, $options: 'i'}},{snippet: {$regex: keyword, $options: 'i'}},{context: {$regex: keyword, $options: 'i'}}]}).limit(10).skip(offset > 0 ? 10*(offset-1) : 0).exec();
    res.json(data)
    var recent = new Recent({
    	term: keyword
    });

    recent.save(function(err){
    	if(err) throw err;
    	
    })

})

router.get('/lastest/imagesearch', function(req,res){

 Recent.find({}, {when: 1, _id: 0, term: 1}).limit(10).sort({when: -1}).exec(function(err, recents){
 	res.json(recents)
 })

})


module.exports = router;