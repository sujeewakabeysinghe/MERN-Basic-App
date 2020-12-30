const Mongoose=require("mongoose");
const Schema=Mongoose.Schema;


const Item=new Schema({
    name:{type:String,required:true},
    date:{type:Date,default:Date.now},
});

const Items=module.exports=Mongoose.model("item",Item);