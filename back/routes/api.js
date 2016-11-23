var express = require('express');
var config = require('../config');
var jwt = require('jsonwebtoken');

var router = express.Router();
var users = require('./users');
var boards = require('./boards');

var auth=function(req,res,next){
	var token=req.body.token || req.query.token || req.headers['jwt-authtoken'];
	if(token){
		jwt.verify(token,config.secret,function(err,decoded){
			if(err){
				return res.status(401).send({
					success:false,
					message:'Unauthorized token'
				});
			}
			else{
				req.authdata=decoded;
				next();
			}
		});
	}
	else{
		return res.status(403).send({
			success:false,
			message:'No token provided'
		});
	}
}

router.use('/user',users);

router.use('/board',auth,boards);

module.exports = router;
