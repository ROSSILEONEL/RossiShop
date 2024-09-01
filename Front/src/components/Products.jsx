import "./products.css";

import { apiSlice } from "../service/api";

export const Products = () => {
  const { useGetProductsQuery, useAddToCartMutation } = apiSlice;
  const { data, isError, isLoading } = useGetProductsQuery();

  const [addToCart] =  useAddToCartMutation();

 console.log(isError);
 
  return (
    <div className="products">
      <h1>Productos</h1>
      {isError ? <h2>{isError.message}</h2> : ""}
      {isLoading ? <h3>Loading...</h3> : ""}
      <ul className="products-list">
        {data
          ? data.map((item) => (
              <li key={item._id}>
                <img src={item.image} alt="" />
                <h3>Name:{item.name}</h3>
                <p>Detail:{item.description}</p>
                <p>Price:{item.price}</p>
                <p>Stock:{item.stock}</p>
                <button className="cart-btn" onClick={()=>addToCart(item)}>Add to cart</button>
              </li>
            ))
          : ""}
      </ul>
 
    </div>
  );
};
