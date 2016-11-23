var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var user=require('./user');

var boardSchema=new Schema({
	title:{type:String,required:true},
	members:[{type:Schema.ObjectId,ref:'users'}],
	createdBy:String,
	active:Boolean,
	created_at:Date,
	updated_at:Date
});

boardSchema.pre('save',function(next){
	var currentDate=new Date();
	this.updated_at=currentDate;
	if(!this.created_at){
		this.created_at=currentDate;
	}
	next();
});

module.exports=mongoose.model('Board',boardSchema);