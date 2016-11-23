var express = require('express');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var config = require('../config');

var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
  User.find({},function(err,data){
  	res.json(data);
  })
});

router.post('/',function(req,res,next){
	req.body.password=crypto.createHash('sha256').update(req.body.password).digest('hex');

	User.find({username:req.body.username},function(err,data){
		if(err) throw err;
		if(data.length>0){
			res.json({success:false,message:'Username already in use'});
		}
	});

	User.find({email:req.body.email},function(err,data){
		if(err) throw err;
		if(data.length>0){
			res.json({success:false,message:'Email already in use'});
		}
	});

	var regist_user=new User({
		username:req.body.username,
		password:req.body.password,
		email:req.body.email,
		role:1,
		active:true
	});

	regist_user.save(function(err,saved){
		if(err) throw err;
		res.json({success:true,message:'User registration complete'});
	});

});

router.post('/login',function(req,res,next){
	req.body.password=crypto.createHash('sha256').update(req.body.password).digest('hex');
	User.findOne({username:req.body.username,password:req.body.password},function(err,data){
		if(data){
			var token=jwt.sign({id:data._id,username:data.username},config.secret,{
				expiresIn: '24h'
			});
			res.json({success:true,token:token})
		}
		else{
			res.status('401').send({success:false,message:'Invalid login'});
		}
	});
});

module.exports = router;
