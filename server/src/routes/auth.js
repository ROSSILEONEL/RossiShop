import Router from "express";
import { loginController } from "../controllers/login.js";
import { verifyToken } from "../utils/auth.js";
const authRouter = Router();

authRouter.post("/signIn",loginController.signIn);
authRouter.post("/logout",loginController.logout);
authRouter.get('/profile', verifyToken, loginController.profile);


export default authRouter
