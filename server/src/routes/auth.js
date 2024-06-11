import Router from "express";
import { loginController } from "../controllers/login.js";
const authRouter = Router();

authRouter.post("/signIn",loginController.signIn);

export default authRouter
