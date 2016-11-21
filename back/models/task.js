var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var taskSchema=new Schema({
	title:{type:String,required:true},
	description:String,
	position:Number,
	duedate:Date,
	createdBy:String,
	status:Number,
	active:Boolean,
	created_at:Date,
	updated_at:Date
});

taskSchema.pre('save',function(next){
	var currentDate=new Date();
	this.updated_at=currentDate;
	if(!this.created_at){
		this.created_at=currentDate;
	}
	next();
});

module.exports=mongoose.model('Task',taskSchema);