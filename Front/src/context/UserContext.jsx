import { createContext,useState } from "react";

export const UserContext= createContext()

const UserProvider=({children})=>{
    
    const [user,setUser]= useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true)

   

return (
    <UserContext.Provider value={{user,setUser,error,setError,loading,setLoading}}>{children}</UserContext.Provider>
)
}

export default UserProvider 
