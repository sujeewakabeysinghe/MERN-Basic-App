const Express=require("express");
const Mongoose=require("mongoose");
const BodyParser=require("body-parser");
const App=Express();
const port=3001;
const Config=require("./config/database");
const Item=require('./routes/item');

Mongoose
    .connect(Config.database,{useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify:false})
    .then(()=>console.log('DB Connected!'))
    .catch(err=>console.log(err));

App.use(BodyParser.json());
App.listen(port,()=>console.log(`Port ${port} Works!`));
App.use("/item",Item);

App.get("/",(req,res)=>res.send("MERN App!"));