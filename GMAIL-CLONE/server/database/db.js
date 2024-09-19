import mongoose from "mongoose";
const Connection=()=>{
    const DB_URI="mongodb+srv://geetika:gmailclone@gmailclone.u3qcwoc.mongodb.net/?retryWrites=true&w=majority&appName=gmailclone"

    try{
        mongoose.connect(DB_URI,{useNewUrlParser:true});
        console.log("succes");
    }catch(error){
        console.log('Error while connecting with the database ',error.message);
    }
}
export default Connection;