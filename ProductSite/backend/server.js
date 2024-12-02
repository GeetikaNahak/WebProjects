import express from "express";
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.get("/",(req,res)=>{
    res.send("H");
})
console.log(process.env.MONGO_URI);
console.log("H")
app.listen(3000,()=>{
    console.log("Server started at http://localhost:3000");
})

// 
