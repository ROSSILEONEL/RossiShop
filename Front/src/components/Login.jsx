import {useState } from "react";
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { CartContext } from '../context/CartContext'





export const Login = () => {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [form, setForm] = useState(null)
    
     const {setUserId} = useContext(CartContext)
     const {user,setUser} = useContext(UserContext)
     
         const getData = async() => {

            try {
                const formLogin = {email:email, password:password}
                 const data = await fetch('http://localhost:8080/auth/signIn',
                     {method: 'POST',
                      body: JSON.stringify(formLogin), 
                      headers: {'Content-Type': 'application/json'}
                    })   
                 const dataJson = await data.json()
                 if(dataJson.status ==='success'){
                    const userId= dataJson.user._id
                 setUserId(userId)
                 setForm(dataJson)
                 setUser(dataJson.user)
                setEmail('')
                setPassword('')}
                localStorage.setItem('user', JSON.stringify(dataJson.user))
                 console.log('form:------------------------');
                 console.log(form);
                 console.log('form:------------------------');
                console.log(dataJson);
               
                
            } catch (error) {
                console.log(error);
            }
        }
        
       
        
        
        
        
        const handleSubmit = (e) => {
            e.preventDefault()
            console.log('email:',email, 'password:',password);
            setForm({email:email, password:password})
            getData()
            
           

}

if (user){
    return (
        <>
        <h1>Logged in</h1>
        <p>Welcome {user.name}</p>
        </>
    )}    
return (
        <>
        
        <form action="/login" method="post">
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" required />
            <label htmlFor="password">Password</label>

            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" required />
            <input type="submit" onClick={handleSubmit} value="Login" id="submit"   />
        </form>
        </>

    )
}