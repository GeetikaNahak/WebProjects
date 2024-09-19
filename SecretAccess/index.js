import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __filename=fileURLToPath(import.meta.url);
const dir=dirname(__filename);
const app=express();
const port=3000;

let isAuthorised=false;
app.use(bodyParser.urlencoded({extended:true}));
function checkPassword(req,res,next){
    let p=req.body["password"];
    if(p==="Geetika011"){
        isAuthorised=true;
    }
    else isAuthorised=false;
    next();
}
app.use(checkPassword);

app.get("/",(req,res)=>{
    res.sendFile(dir+"/public/index.html");
})
app.post("/check",(req,res)=>{
    if(isAuthorised)res.sendFile(dir+"/public/secret.html");
    else res.sendFile(dir+"/public/index.html");
})

app.listen(port,()=>{
    console.log("running!");
})