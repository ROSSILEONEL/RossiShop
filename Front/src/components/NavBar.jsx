import './navbar.css'
import { NavLink } from 'react-router-dom'
import { CartIcon } from './Icons.jsx'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
export const NavBar=()=>{

  const {user}= useContext(UserContext)
  return(
    <div className="container">
      <div className="logo">
        🌑🌒🌓🌔🌕🌖🌗🌘
      </div>
      <input className='search' type="text" placeholder="Celulares, Buzos, Zapatillas ..." />
      <div className="user">
        <div className="div-icon">
          

          👤
          <NavLink to="/login">{user?user.name:'Mi cuenta'}</NavLink>
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