const Mongoose=require("mongoose");
const Schema=Mongoose.Schema;


const Item=new Schema({
    name:{type:String,required:true},
    date:{type:Date,default:Date.now},
});

module.exports=Mongoose.model("item",Item);

module.exports.createItem=function(item,callback){
    item.save(callback);
};