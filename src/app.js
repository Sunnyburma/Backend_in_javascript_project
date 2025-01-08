import express from "express";
import cookieParser from "cookie-parser";             //cookie-parser is for, user cookies access and to set the cookies
import cors from "cors";

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials : true
}))    //use is use for middleware or configuration

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


////routes import
import userRouter from './routes/user.routes.js';
//routes declaration
                                                  //app.get  //we use because the router and controller at same file now we use
                                                //if we use router then we take the middleware first

app.use("/api/v1/users", userRouter)                  //when user type on url "users" it go to "user.routers.js" file 

//http://localhost:8000/api/v1/users/register 
//http://localhost:8000/api/v1/users/login 

export { app  } 