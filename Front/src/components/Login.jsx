import {  useState , useEffect } from "react";
import { useSignInMutation } from "../service/api";



export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(null);
const[user,setUser]=useState(null)

//   const [signIn,{data}] = useSignInMutation({
//     "email": "egypcian_god@gmail.com",
//     "password": "password"
// });

const [signIn, { data, isError, isLoading }] =  useSignInMutation();
  
useEffect( ()=>{
  async function log() {
      if (!form) return;
    try {
       const dataUser = await signIn(form)

       setUser(dataUser)
       setUser(signIn(form))
       
      } catch (error) {
     console.log(error);   
      }
    }
 
log(form)
    
  }, [form]);

    

    
    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log("email:", email, "password:", password);
        setForm({ email:email, password:password });
        
    }

 

      if (data) {
       
        return (
          <>
            <h1>Logged in</h1>
            <p>Welcome {''}</p>
          </>
        );
      }else{
        localStorage.setItem("user", 'ningun usuario');
      }

      return (
    <>
      <form action="/login" method="post">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          required
          />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
          required
          />
        <input type="submit" onClick={handleSubmit} value="Login" id="submit" />
      </form>
    </>
  )
  
};
