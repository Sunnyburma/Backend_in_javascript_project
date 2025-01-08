import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js"; 

const router = Router()

router.route("/register").post(registerUser)      //goto userRouter to "registerUser" and url is http://localhost:8000/api/v1/users/register 

export default router;