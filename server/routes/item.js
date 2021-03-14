const Express=require("express");
const items = require("../models/items");
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

Router.get("/get",(req,res)=>{
    Item.find()
    .sort({date: -1})
    .then(item => res.json(item))
})

Router.delete('/:id', (req,res)=>{
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({ success: true}))
    .catch(err=> res.status(404).json({ success:false}))
    )
})

module.exports=Router;