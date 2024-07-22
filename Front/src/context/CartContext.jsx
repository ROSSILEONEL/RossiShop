
import { createContext,useState,useEffect } from "react";


const CartContext= createContext()

const CartProvider=({children})=>{
    
    const [data,setData]= useState(null);
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)
    // const [url,setUrl]=useState('http://localhost:8080/cart/?id=667f1b585ac9245940317c29')
    const [userId,setUserId]=useState(null)
    

    useEffect(()=>{
       const getData = async ()=>{
       setLoading(true)

       try {
         const response = await fetch( `http://localhost:8080/cart/${userId}`)
         if(!response){
             let err = new Error('fetch failed')
             err.status= response.status || '00'
             err.message= response.message || 'something happen'
             throw err
       }

    const data = await response.json()
    console.log('data del provider');
    console.log(data);
setData(data)
} catch (error) {
setError(error)
}finally{
    setLoading(false)
}

}
if(userId){
getData()}


    },[userId])

const cart= {data,loading,error,setUserId}
    
    
    return(
        <CartContext.Provider value={cart}>{children}</CartContext.Provider>
    )
}

export {CartContext}
export default CartProvider
