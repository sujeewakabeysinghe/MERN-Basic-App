const Express=require("express");
const Mongoose=require("mongoose");
const BodyParser=require("body-parser");

const App=Express();

App.use(BodyParser.json());

const Config=require("./config/database");

const connection=Mongoose.connect(Config.database,{useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify:false});

const port=3000;

App.listen(port,()=>console.log("Port Works!"));

if(connection){
    console.log("DB Works!");
}
else{
    console.log("DB does not Work!");
}