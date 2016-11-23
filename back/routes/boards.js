var express = require('express');
var router = express.Router();
var Board = require('../models/board');

router.get('/',function(req,res,next){
	Board.find({members:req.authdata.id},'title',function(err,data){
		if(err) throw err;
		res.json(data)
	});	
});

router.post('/',function(req,res,next){
	var board=new Board({
		title:req.body.title,
		members:[req.authdata.id],
		createdBy:req.authdata.id,
		active:true
	});

	board.save(function(err,saved){
		if(err) throw err;
		res.json({success:true,message:'Board saved'});
	});
})

module.exports = router;