
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useState, useEffect } from "react";

import {useGetCartQuery} from "../service/api"



   
  export const Cart = () => {
    const [user, setUser] = useState(null);
    const { data, error, loading } = useGetCartQuery(user?._id);
  
    useEffect(() => {
      const userStorage = localStorage.getItem("user");
      if (userStorage===undefined) {
        // setUser(JSON.parse(userStorage));
        console.log(userStorage);
        console.log(' es undefined');
      }
    }, []);
  
    if (!user) {
      return <h1>Please Login</h1>;
    }
  
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