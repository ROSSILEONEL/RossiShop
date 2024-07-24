import { userModel } from "../models/userModel.js";
import { cartModel } from "../models/cartModel.js";
import { comparePassword } from "../utils/utils.js";
import { generateToken } from "../utils/auth.js";



export class loginController {
 
 
  static async signIn(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).populate("roles");
 
    
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

     const token = generateToken(user);
    await res.cookie("token", token, { maxAge: 3600000, signed: true , httpOnly: true });
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

