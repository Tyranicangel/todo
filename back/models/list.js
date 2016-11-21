var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var task=require('./task');

var listSchema=new Schema({
	title:{type:String,required:true},
	position:Number,
	tasks:[task],
	createdBy:String,
	board:String,
	active:Boolean,
	created_at:Date,
	updated_at:Date
});

listSchema.pre('save',function(next){
	var currentDate=new Date();
	this.updated_at=currentDate;
	if(!this.created_at){
		this.created_at=currentDate;
	}
	next();
});

module.exports=mongoose.model('List',listSchema);