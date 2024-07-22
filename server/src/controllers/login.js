import { userModel } from "../models/userModel.js";
import { cartModel } from "../models/cartModel.js";
import { comparePassword } from "../utils/utils.js";
import { generateToken } from "../utils/auth.js";
import jwt from "jsonwebtoken";

export class loginController {
 
 
  static async signIn(req, res) {
    const { email, password } = req.body;
    console.log(email, password);
    console.log(email, password);
    console.log(email, password);
    const user = await userModel.findOne({ email }).populate("roles");
    console.log(user);
    console.log(user);
    console.log(user);
    console.log(user);
    
    if (user==null) {
    // if (!user) {
     return res.send({ status: "error", message: "Usuario no encontrado" });
    }
    const isMatch = comparePassword(password, user);
    if (!isMatch) {
      res.send({
        status: "error",
        message: "Usuario o contraseña incorrectos",
      });
    } else {
      // jwt.sign({objeto con datos}, 'Secretkey', {expiresIn: '1h'})
     const token = generateToken(user);

      res.send({
        status: "success",
        user: user,
        message: "Sesión iniciada con válido",
        token: token,
      });
    }
  }
 
  static async logout(req, res) {
    req.session.destroy((error) => {
      if (!error) {
        res.send("Sesión cerrada");
      } else {
        console.log(error);
        res.send({ status: "error", message: "Sesión no cerrada" });
      }
    });
  }


}

