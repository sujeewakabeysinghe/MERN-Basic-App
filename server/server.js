const Express=require("express");
const Mongoose=require("mongoose");
const BodyParser=require("body-parser");

const App=Express();

App.use(BodyParser.json());

const Config=require("./config/database");

Mongoose
    .connect(Config.database,{useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify:false})
    .then(()=>console.log('DB Connected!'))
    .catch(err=>console.log(err));

const port=3000;

App.listen(port,()=>console.log("Port Works!"));

