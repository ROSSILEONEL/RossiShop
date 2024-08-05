import { userModel } from "../models/userModel.js";
import { cartModel } from "../models/cartModel.js";
import { comparePassword } from "../utils/utils.js";
import { generateToken } from "../utils/auth.js";



export class loginController {
 
 
  static async signIn(req, res) {
 
      const { email, password } = req.body;
  
      // Validación de entrada
      if (!email || !password) {
        return res.status(400).send({ status: "error", message: "Email y contraseña son requeridos" });
      }
  
      const user = await userModel.findOne({ email }).populate("roles");
  
      if (!user) {
        return res.status(404).send({ status: "error", message: "Usuario no encontrado" });
      }
  
      const isMatch =  comparePassword(password, user);
      if (!isMatch) {
        return res.status(401).send({
          status: "error",
          message: "Usuario o contraseña incorrectos",
        });
      }
  
      const token = await generateToken(user);
    
console.log('El toquen recien creado-->', token);

      res.cookie("token", token, { maxAge: 3600000, signed: true, httpOnly: true });
      return res.status(200).send({
        status: "success",
        token: token,
        user: user,
        message: "Sesión iniciada con éxito",
      });
  
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

  static async profile(req, res) {
    console.log(req.userId);
    console.log(req.email)
    ;
    console.log('user');
const user = await userModel.findById(req.userId).populate("roles");
    res.send({message:"admin con acceso",payload:user})
}

}