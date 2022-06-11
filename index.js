var mongoose=require('mongoose');
var express=require('express');

var bodyParser=require('body-parser');
var route = require('./route');
mongoose.connect("mongodb+srv://ayanmultani:ayanmultani@cluster0.j04ykjy.mongodb.net/student?retryWrites=true&w=majority").then(()=>
{
       console.log("DB connected");
       app=express();

       app.use(express.json())
       app.use(bodyParser.urlencoded({extended:false}))
       app.use('/api',route)
       app.listen(3000,()=>{
         console.log("server started at 3000");               
})
}).catch((err)=>{
    console.log(err);
})


