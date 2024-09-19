import express from 'express'
import bodyParser from "body-parser";
const app=express();
let lt=0;
app.use(bodyParser.urlencoded({extended:true}));
let lname,fname;
function checkname(req,res,next){
    lname=req.body["lname"];
    fname=req.body["fname"];
    lt=lname.length+fname.length;
    next();
}

app.get("/",(req,res)=>{
    const data={
        title:"EJS TAGS",
        seconds:new Date().getSeconds(),
        items:["apple","banana","custard"],
        htmlcontent:"<em>This is an illustration</em>",
        length:lt,
        lname:""
        ,
        fname:"",
    };
    res.render("index.ejs",data);
})

app.use(checkname);
app.post('/check',(req,res)=>{
    const data={
        title:"EJS TAGS",
        seconds:new Date().getSeconds(),
        items:["apple","banana","custard"],
        htmlcontent:"<em>This is an illustration</em>",
        length:lt,
        lname:lname,
        fname:fname,
    };
    res.render("index.ejs",data);
})
app.listen(3000,()=>{
    console.log("listening");
})