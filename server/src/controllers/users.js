import { userModel } from "../models/userModel.js";
import { createHash } from "../utils/utils.js";
export class UsersController {
  static async getAllUsers(req, res) {
    const users = await userModel.find({});
    res.send(users);
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userModel.findById(id);
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send("Error al obtener usuario", err);
    }
  }

  static async addUser(req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).send("El usuario no tiene los datos requeridos");
    }
    userModel
      .create({ name: name, email: email, password: createHash(password) })
      .then(res.status(201).send({status:"succes",message:"Successfully created user"}))
      .catch((err) => {
        res.status(500).send("Error al crear usuario", err);
      });
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;
    userModel
      .findByIdAndUpdate(id, { name: name, email: email, password: password })
      .then(res.send("Successfully UPDATE user"))
      .catch((err) => {
        res.send("Error al actualizar usuario", err);
      });
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    userModel
      .findByIdAndDelete(id)
      .then(res.send("Successfully DELETE user"))
      .catch((err) => {
        res.send("Error al eliminar usuario", err);
      });
  }
}
