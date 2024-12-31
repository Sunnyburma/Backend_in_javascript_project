// required('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path : './env'})

connectDB()                                          ///*"test": "echo \"Error: no test specified\" && exit 1",*/





// import express from "express";
// const app = express();
// ( async()=>{
//     try{
//        await  mongoose.connection(`${process.env.MONGO_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//             console.log("ERR",error);
//             throw error;
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listen the port ${process.env.PORT}`);
//        });

//     } catch(error){
//         console.error("ERROR", error)
//         throw err
//     }
// })()