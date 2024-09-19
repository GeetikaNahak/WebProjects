import express from 'express';
import bodyParser from "body-parser";


const app=express();
const port=3000;
const d=new Date();
    const day=d.getDate();
    let dt,ad;
let p;
app.use(bodyParser.urlencoded({extended:true}));
function checkname(req,res,next){
p=req.body["wish"];
next();
}
app.get('/',(req,res)=>{
    // const na=res.body["wish"];
    
    if(!(day==6||day==7)){
        dt="a weekday";
        ad="Have to work :(";
    }
    else{
        dt="a Weekend :)";
        ad="ENJOY !!";
    }
    res.render("index.ejs",{
        date:dt, advice:ad,name:"enter name"
    });
})
app.use(checkname);
app.post('/check',(req,res)=>{
   
    console.log("hi");
    res.render("index.ejs",{
        date:dt, advice:ad,name:p
    });
})
app.listen(port,()=>{
    console.log("Listening");
})

