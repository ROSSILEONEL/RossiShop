import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { UserContext } from "../context/UserContext.jsx";

export const Cart = () => {
  const cart = useContext(CartContext);
  const { user } = useContext(UserContext);
  const { data, error, loading } = useContext(CartContext);
  if (!user) {
    return <h1>Please Login</h1>;
  }

  const listItems = cart.data.items;
  return (
    <>
      <h1>Cart</h1>
      {error && <h2>{error}</h2>}
      {loading && <h2>Loading...</h2>}
      {/* {listItems && listItems.map(item=>console.log(item))} */}
      {listItems &&
        listItems.map((item) => {
          return (
            <>
              <h2 key={item._id}>{item.productId.name}</h2>
              <h2>{item.productId.description}</h2>
              <h2>{item.quantity}</h2>
              <h2>{item.productId.price}</h2>

              <button> {<RemoveFromCartIcon />}</button>
                
            </>
          );
        })}

      <h2>{JSON.stringify(data)}</h2>
    </>
  );
};
