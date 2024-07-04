import { userModel } from "../models/userModel.js";
import { cartModel } from "../models/cartModel.js";
import { comparePassword } from "../utils/utils.js";
import jwt from "jsonwebtoken";

export class loginController {
 
 
  static async signIn(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).populate("roles");

    
    if (user.length < 1) {
      res.send({ status: "error", message: "Usuario no encontrado" });
    }
    const isMatch = comparePassword(password, user);
    if (!isMatch) {
      res.send({
        status: "error",
        message: "Usuario o contraseña incorrectos",
      });
    } else {
      // jwt.sign({dato}, 'key', {expiresIn: '1h'})
      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      res.send({
        status: "success",
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

// static async session(req, res) {

//     if (req.session.user) {
//         res.send({status:"success",message:`Sesión iniciada con el usuario: ${req.session.user.name}`,user:req.session.user});
//     } else {
//         res.send({status:"error",message:"Sesión no iniciada"});
//     }
// }

// delete user.password;
// req.session.user = user;
// req.session.admin = true;

// res.send({ status: "success", message: "Sesión iniciada con éxito" });
