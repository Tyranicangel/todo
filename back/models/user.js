var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
	username:{type:String,required:true,unique:true},
	password:{type:String,required:true},
	email:{type:String,required:true,unique:true},
	role:Number,
	active:Boolean,
	created_at:Date,
	updated_at:Date
});

userSchema.pre('save',function(next){
	var currentDate=new Date();
	this.updated_at=currentDate;
	if(!this.created_at){
		this.created_at=currentDate;
	}
	next();
});

module.exports=mongoose.model('User', userSchema);