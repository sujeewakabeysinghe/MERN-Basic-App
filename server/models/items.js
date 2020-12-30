const Mongoose=require("mongoose");
const Schema=Mongoose.Schema;


const Items=new Schema({
    name:{type:String,required:true},
    date:{type:Date,default:Date.now},
});