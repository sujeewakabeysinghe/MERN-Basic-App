const Express=require("express");
const Item=require("../models/items");
const Router=Express.Router();


Router.post("/add",(req,res)=>{
    const newItem=new Item({
        name:req.body.name
    });
    Item.createItem(newItem,(err)=>{
        if(err){
            res.json({state:false,msg:"Failed To Save!"});
        }
        else{
            res.json({state:true,msg:"Successfully Saved!"});
        }
    });
});

Router.get("/test",(req,res)=>{
    res.send("App Items!")
})

module.exports=Router;