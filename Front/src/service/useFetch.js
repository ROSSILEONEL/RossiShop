import { useState,useEffect } from "react";


export function useFetch(url){
    const [data,setData]= useState(null);
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)

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

return {data,loading,error}

}