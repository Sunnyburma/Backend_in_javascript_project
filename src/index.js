// required('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
//import { app } from './app.js';
import { app } from './app.js';
dotenv.config({ 
    path : './.env'
});

connectDB()                                          //only mongoDB is connected
.then(()=>{                                          //now the app is start to listen at now server is start
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(` Server is running in port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
 console.log("MongoDB connection failed !!!",err)
})



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