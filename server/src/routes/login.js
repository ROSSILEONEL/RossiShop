import { Router } from "express";
import { loginController } from "../controllers/login.js";
import { verifyToken } from "jsonwebtoken";


 const loginRouter = Router();

loginRouter.post("/", loginController.login);
loginRouter.get("/session", loginController.session);
loginRouter.get("/logout", loginController.logout);
loginRouter.get("/profile",verifyToken, loginController.profile);


// loginRouter.get("/session", (req, res) => {
//     if (req.session.counter) {
//   req.session.counter = req.session.counter + 1;
//       res.send(`Sesión iniciada con el contador: ${req.session.counter}`);
    
//   } else {
//   req.session.counter = 1;
//   res.send(`Sesión iniciada con el contador: ${req.session.counter}`);
//   }   
    
//   });
  
  
  

  export default loginRouter;