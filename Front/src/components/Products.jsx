import { useFetch } from "../service/useFetch"

export const Products = () => {

 const {data,error,loading}= useFetch('http://localhost:8080/products')
 console.log('DATAAA');
 console.log(data);

  return (
    <div className="products">
      <h1>Productos</h1>
      <ul>
        {error?<h2>{error.message}</h2>:''}
      {loading?<h3>Loading...</h3>:''}
      {
        data?data.map(item=><li key={item._id}>{item.name}</li>):''
      }
      </ul>
      <p>Lista de productos</p>
    </div>
  )
}