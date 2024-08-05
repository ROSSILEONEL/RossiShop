import './navbar.css'
import { NavLink } from 'react-router-dom'
import { CartIcon } from './Icons.jsx'
import { useSelector } from 'react-redux'
import { authSlice } from '../redux/auth'

export const NavBar=()=>{

  const auth = useSelector((state) => state[authSlice.reducerPath]);
  console.log(auth);
  console.log(auth);
  console.log("auth");
  console.log(auth);
  console.log(auth);
  return(
    <div className="container">
      <div className="logo">
        🌑🌒🌓🌔🌕🌖🌗🌘
      </div>
      <input className='search' type="text" placeholder="Celulares, Buzos, Zapatillas ..." />
      <div className="user">
        <div className="div-icon">
          

          👤
          <NavLink to="/login">{auth.user?auth.user.name:'Mi cuenta'}</NavLink>
          </div>

      </div>
      <div className="cart ">
        <NavLink className={({isActive})=>isActive?'cart-icon active':''}  to="/cart">
        
       <CartIcon />
        </NavLink>
       
 

       
      </div>
    </div>
  )
}