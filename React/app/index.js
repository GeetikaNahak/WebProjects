import express from "express";
// const fs = require('fs');
// import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename)
// const path = require('path');
// const dirPath = path.join(__dirname, './app/index.html');
const app=express();
const port=3000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});
const dir=__dirname+'/index.html';
app.get("/",(res,req)=>{
    req.sendFile(dir);
});