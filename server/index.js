import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./src/routes/products.js";
import cartRouter from "./src/routes/cart.js";
import usersRouter from "./src/routes/users.js";
import authRouter from "./src/routes/auth.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import { createRoles } from "./src/utils/initialSetup.js";
const PORT = process.env.PORT ?? 8080;


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "secretCode",
    resave: true,
    saveUninitialized: true,
    
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://Siria:Colita@shopping.5n8oq3t.mongodb.net/?retryWrites=true&w=majority&appName=shopping',
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    ,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      secure: true }
  })}))

  
// app.use(
//   session({ secret: "secretCode", resave: true, saveUninitialized: true })
// );
dotenv.config();
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
// app.use("/login", loginRouter);
app.get("/", (req, res) => {
  res.send("Bienvenido");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {console.log("MongoDB connected in Rossi Shopping App"),
     createRoles()})
  .catch((err) => {
    if (err) {
      console.log("Happened an error while connecting to MongoDB", err);
      process.exit(1); // -->
      }
      });
      
     // si mongoose esta conectado...
     if (mongoose.connection.readyState == 1) {
      
    }
    
// let result = await userModel.insertMany( [
//     {
//       name: 'Goku',
//       email: 'goku@gmail.com',
//       password: 'LaClaveDelExito'
//     },
//     {
//       name: 'Vegeta',
//       email: 'vegeta@gmail.com',
//       password: 'LaClaveDelExito'
//     },
//     {
//       name: 'Bulma',
//       email: 'bulma@gmail.com',
//       password: 'LaClaveDelExito'
//     },
//     {
//       name: 'Krillin',
//       email: 'krillin@gmail.com',
//       password: 'LaClaveDelExito'
//     },
//     {
//       name: 'Piccolo',
//       email: 'piccolo@gmail.com',
//       password: 'LaClaveDelExito'
//     },
//     {
//       name: 'Gohan',
//       email: 'gohan@gmail.com',
//       password: 'LaClaveDelExito'
//     },
//     {
//       name: 'Trunks',
//       email: 'trunks@gmail.com',
//       password: 'LaClaveDelExito'
//     },
//     {
//       name: 'Goten',
//       email: 'goten@gmail.com',
//       password: 'LaClaveDelExito'
//     },
//     {
//       name: 'Chi-Chi',
//       email: 'chichi@gmail.com',
//       password: 'LaClaveDelExito'
//     },
//     {
//       name: 'Android 18',
//       email: 'android18@gmail.com',
//       password: 'LaClaveDelExito'
//     }
//   ])
//   .then(
//     console.log('Usuarios insertados')
//   ).catch(error => {
//     console.error('Error al insertar usuarios:');
//   });

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
