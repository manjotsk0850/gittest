const express=require("express");
const mongoose=require("mongoose");
const Books=require('./models/model');


const app=express();

const DBstrring={
dbdtring:"mongodb+srv://manjot0850:manjot@cluster0.nhpql8o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
};

mongoose.connect(DBstrring.dbdtring,{}).then(()=>{
    console.log("DB connection successfull");
})

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<h1>sbcd</h1>"); 
})
app.post("/",async (req,res)=>{
    console.log(req.body);
   await Books.create(req.body);


    res.json({
        "success":"abc"
    });
    
})

app.listen(8000,"127.0.0.1",()=>{
    console.log("Server started at port 8000");
});