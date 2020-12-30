const Express=require("express");
const Contact=require("../models/items");
const Router=Express.Router();


Router.post("/add",(req,res)=>{
    const NewContact=new Contact({
        userId:req.body.userId,
        fullName:req.body.fullName,
        contactNo:req.body.contactNo
    });
    Contact.createcontact(NewContact,(err,user)=>{
        if(err){
            res.json({state:false,msg:"Failed To Save!"});
        }
        else{
            res.json({state:true,msg:"Successfully Saved!"});
        }
    });
});

module.exports=Router;