import './products.css'
import { useFetch } from "../service/useFetch"

export const Products = () => {

 const {data,error,loading}= useFetch('http://localhost:8080/products')
 console.log('DATAAA');
 console.log(data);


  return (
    <div className="products">
      <h1>Productos</h1>
        {error?<h2>{error.message}</h2>:''}
      {loading?<h3>Loading...</h3>:''}
      <ul className="products-list">
      {
        data?data.map(item=>
        <li key={item._id}>
          <img src={item.image} alt=""/>
          <h3>Name:{item.name}</h3>
          <p>Detail:{item.description}</p>
          <p>Price:{item.price}</p>
          <p>Stock:{item.stock}</p>
          <button className='cart-btn'>Add to cart</button>
          </li>):''
      }
      </ul>
      <p>Lista de productos</p>
    </div>
  )
}