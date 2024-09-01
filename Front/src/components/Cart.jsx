
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";


import {useGetCartQuery} from "../service/api"




   
  export const Cart = () => {
    // const [user, setUser] = useState(null);
const token = useSelector((state)=> state.auth.token);
const userAuth = useSelector((state)=> state.auth.user);
console.log(token);
console.log(userAuth);

    const userStorage = localStorage.getItem("user");
    
    const { data, error, loading } = useGetCartQuery(info.data.user._id);
    if (!userStorage) {
      return <h1>Please Login</h1>;
    }
    const info = JSON.parse(userStorage);
    console.log('INFORMACION',info);
    console.log('USER STORAGE', userStorage);
    // let idProvisorio= '667f1b585ac9245940317c29'

    // const { data, error, loading } = useGetCartQuery(idProvisorio);

    console.log(data);
    console.log(data);
    console.log(data);
    
    
  
  
    return (
      <>
        <h1>Cart</h1>
        <ul>
          {loading && <h3>Loading...</h3>}
          {error && <h2>{error.message}</h2>}
          {data &&
            data.items.map((item) => (
              <li key={item._id}>
                <img src={item.productId.name} alt="" />
                <h3>Name: {item.productId.name}</h3>
                <p>Detail: {item.productId.description}</p>
                <p>Price: {item.productId.price}</p>
                <p>In Cart: {item.quantity}</p>
                <p>Stock: {item.productId.stock}</p>
                <div>
                  <button className="cart-btn">
                    <AddToCartIcon />
                  </button>
                  <button className="cart-btn">
                    <RemoveFromCartIcon />
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </>
    );
  };