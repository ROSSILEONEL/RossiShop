import { createContext,useState,useEffect } from "react";

const CartContext= createContext()

const CartProvider=({children})=>{
    
    const [data,setData]= useState(null);
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)
    const [url,setUrl]=useState('http://localhost:8080')

    useEffect(()=>{
       const getData = async ()=>{
       setLoading(true)

       try {
         const response = await fetch(url)
         if(!response){
             let err = new Error('fetch failed')
             err.status= response.status || '00'
             err.message= response.message || 'something happen'
             throw err
       }

     const json = await response.json()
setData(json)
} catch (error) {
setError(error)
}finally{
    setLoading(false)
}

}
getData()


    },[url])

const cart= {data,loading,error,url}
    
    
    return(
        <CartContext.Provider value={cart}>{children}</CartContext.Provider>
    )
}

export {CartContext}
export default CartProvider
